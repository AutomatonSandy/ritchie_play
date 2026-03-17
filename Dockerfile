FROM mcr.microsoft.com/playwright:v1.58.2-jammy

WORKDIR /app

# Install real Google Chrome for `channel: 'chrome'`
RUN apt-get update \
  && apt-get install -y --no-install-recommends wget gnupg ca-certificates ffmpeg \
  && wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-linux-signing-keyring.gpg \
  && echo "deb [arch=amd64 signed-by=/usr/share/keyrings/google-linux-signing-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list \
  && apt-get update \
  && apt-get install -y --no-install-recommends google-chrome-stable \
  && rm -rf /var/lib/apt/lists/*

# Install dependencies first (better layer caching)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy project files
COPY . .

# Default command: run tests, then convert videos to MP4 (without hiding failures)
CMD ["bash", "-lc", "set -euo pipefail; set +e; HEADED=1 xvfb-run -a npx playwright test --project=chrome; TEST_EXIT=$?; set -e; shopt -s globstar nullglob; for f in test-results/**/*.webm; do out=\"${f%.webm}.mp4\"; ffmpeg -y -i \"$f\" -c:v libx264 -preset veryfast -crf 23 -c:a aac -b:a 128k \"$out\"; done; exit $TEST_EXIT"]


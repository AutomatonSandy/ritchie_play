import { test, expect } from "@playwright/test";
import type { Pet } from "../../models/Pet";
import Ajv from "ajv";
import getRequestUserSchema from "../../json_schema/getRequest.json";

const BASE_URL = "https://petstore.swagger.io/v2/";

/** Pet IDs to run GET tests against (only IDs that exist in the store will pass). */
const PET_IDS_GET = [1, 2, 10];
const PET_ID_JSONSCHEMA = [30, 40, 50];

for (const petId of PET_IDS_GET) {
  test(`GET pet by id ${petId} returns the correct pet @api`, async ({
    request,
  }) => {
    const response = await request.get(`${BASE_URL}pet/${petId}`);
    console.log(
      "We got status " +
        response.status() +
        " status message is " +
        response.statusText(),
    );
    if (response.status() == 200) {
      expect(response.ok()).toBeTruthy();

      const body = await response.json();
      console.log(body);

      const pet = body as Pet;
      expect(pet.id).toBe(petId);
      console.log("Pet Category is " + pet.category.id);
      console.log("Pet name is " + pet.name);
    } else {
      console.log(
        "Invalid request / or check the id, status code is " +
          response.status(),
      );
    }
  });
}
for(const petId of PET_ID_JSONSCHEMA){
  test(`GET schema validation for pet ${petId} @api`, async ({ request }) => {
    const ajv = new Ajv();
    const response = await request.get(`${BASE_URL}pet/${petId}`);
    const responseBody = await response.json();
    if (response.status() == 200) {
      const valid = ajv.validate(getRequestUserSchema, responseBody);

      if (!valid) {
        console.error("AJV Validation Errors:", ajv.errorsText());
      }
      expect(valid).toBe(true);
    } else {
      console.log(
        "Invalid request / or check the id, status code is " +
          response.status(),
      );
    }
  });
 }

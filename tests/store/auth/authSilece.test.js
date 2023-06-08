import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../fixtures/authFixtures";

describe("Prueba en el AuthSlice", () => {
  test('debe de regresar el estado inicial y llamarse "auth"', () => {
    expect(authSlice.name).toBe("auth");
    expect(authSlice.reducer(initialState, {})).toEqual(initialState);
  });
});

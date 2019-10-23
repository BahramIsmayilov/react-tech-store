import * as contentful from "contentful";

export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "xm5coblqgb7x",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "qVJCVm3iSXRb9H-h0vdAr7oxBI81MzhcCcD0qGFDeb4"
});

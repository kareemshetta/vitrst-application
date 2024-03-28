import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    // return HttpResponse.json(null, { status: 500 });
    return HttpResponse.json([
      { title: "ahmed" },
      { title: "karem" },
      { title: "khaled" },
    ]);
  }),
];

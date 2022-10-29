import { Film } from "@/domain/models";

export const getMockedFilmList = (): Film[] => ([
  {
    id: 1,
    title: "any_title_1",
    description: "any_description_1",
    bannerUrl: "any_url_1",
    director: "any_director_1",
    producer: "any_producer_1",
  },
  {
    id: 2,
    title: "any_title_2",
    bannerUrl: "any_url_2",
    description: "any_description_2",
    director: "any_director_2",
    producer: "any_producer_2",
  },
]);

import React from "react";

import { categories } from "@/mocks/categories";
import { cities } from "@/mocks/cities";

import FormFilterCategories from "./Form";

type Props = {
  categorySlug: string;
};

function ModalFilterCategories({ categorySlug }: Props) {
  return (
    <FormFilterCategories
      categories={categories}
      cities={cities}
      categorySlug={categorySlug}
      citySlug=""
    />
  );
}

export default ModalFilterCategories;

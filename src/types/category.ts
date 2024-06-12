interface Course {
  courseName: string;
  courseBanner: string;
  instructorName: string;
  categoryID: string;
  slug: string;
}

export interface SubCategory {
  categoryName: string;
  categoryID: string;
  categoryIcon: string;
  courses: Course[];
}

export interface CategoryResponse {
  categoryName: string;
  subCategories: SubCategory[];
}

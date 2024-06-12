export interface Course {
  courseID: string;
  courseName: string;
  courseBanner: string;
  instructorName: string;
  instructorPhoto: string;
  blurHash: string;
  instructorTag: string;
  category: string;
  slug: string;
  courseDescription: string;
}

export interface CourseDetail {
  _id: string;
  enabled: boolean;
  isDeleted: boolean;
  courseName: string;
  category: {
    _id: string;
    categoryName: string;
  };
  courseBanner: string;
  courseBannerHash: string;
  blurHash: string; //for instructor
  courseDescription: string | null;
  instructor: {
    instructorName: string;
    instructorPhoto: string;
    tag: string;
  };
  prices: {
    _id: string;
    plan: {
      planName: string;
      devices: number;
      planDescription: string;
    };
    priceInETB: number;
    priceInUSD: number;
  }[];
  createdAt: string;
  lastModified: string;
  createdBy: string;
  courseLength: number | null;
  mainVideo: string | null;
  trailerVideo: string | null;
  advertising: {
    _id: string;
    advert: {
      advertName: string;
      expiryDate: string;
    };
    adTimeStamp: number;
  }[];
  isFeatured: boolean;
  slug: string;
}

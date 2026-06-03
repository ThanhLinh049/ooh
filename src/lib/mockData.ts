export type VipJob = {
  id: string;
  jobTitle: string;
  companyName: string;
  companyLogo?: string;
  location: string;
  salary: string;
  jobType: string;
  category: string;
  excerpt: string;
  packageType: "top_vip" | "vip" | "sponsored" | "highlighted";
  priorityLevel: number;
  startsAt: string;
  expiresAt: string;
  daysLeft: number;
  paymentStatus: "paid" | "pending";
  isSponsored: boolean;
  isUrgent: boolean;
  isHighSalary?: boolean;
  postedAt: string;
  applyUrl: string;
};

const DEMO_COMPANY_LOGO =
  "https://sjkgroup.vn/wp-content/uploads/2023/04/logo-sjk-group.svg";

const companies = [
  "Shojiki Ads",
  "Goldsun Media",
  "Kỷ Nguyên Group",
  "DatVietVAC",
  "Vạn Xuân Media",
  "LED Billboard VN",
  "Outdoor Media Network",
  "Pano Group",
  "CityAds Media",
  "Hà Nội OOH",
  "Saigon Signage",
  "MediaWorks",
];

const titles = [
  "Account Executive OOH",
  "Chuyên viên Kỹ thuật LED",
  "Media Planner Outdoor",
  "Giám sát Thi công Biển Pano",
  "Designer 3D - Visual Outdoor",
  "Sales Manager - Billboard",
  "Kỹ sư Vận hành Màn hình LED",
  "Trưởng phòng Kinh doanh OOH",
  "Activation Project Manager",
  "Producer - Sự kiện ngoài trời",
  "Chuyên viên Media Booking",
  "Account Director - Agency",
  "Nhân viên Lắp đặt Biển hiệu",
  "Creative Lead - Experiential",
  "Strategic Planner OOH",
  "Sales Executive - Pano Tấm Lớn",
];

const locations = [
  "TP. Hồ Chí Minh",
  "Hà Nội",
  "Đà Nẵng",
  "Bình Dương",
  "Hải Phòng",
  "Cần Thơ",
];

const salaries = [
  "15 - 25 triệu",
  "20 - 35 triệu",
  "Thoả thuận",
  "25 - 40 triệu",
  "10 - 18 triệu",
  "30 - 50 triệu",
  "Trên 50 triệu",
];

const categories = [
  "Kinh Doanh",
  "Thi Công",
  "Thiết Kế",
  "Media Planning",
  "Kỹ Thuật",
  "Activation",
];

const packages: VipJob["packageType"][] = [
  "top_vip",
  "vip",
  "sponsored",
  "highlighted",
];

export const vipJobs: VipJob[] = Array.from({ length: 24 }).map((_, i) => {
  const pkg = packages[i % packages.length];
  const salary = salaries[i % salaries.length];

  return {
    id: `job-${i + 1}`,
    jobTitle: titles[i % titles.length],
    companyName: companies[i % companies.length],
    companyLogo: DEMO_COMPANY_LOGO,
    location: locations[i % locations.length],
    salary,
    jobType: "Full-time",
    category: categories[i % categories.length],
    excerpt:
      "Tham gia đội ngũ chuyên gia hàng đầu trong ngành quảng cáo ngoài trời, vận hành dự án quy mô lớn tại các thành phố trọng điểm.",
    packageType: pkg,
    priorityLevel:
      pkg === "top_vip" ? 4 : pkg === "vip" ? 3 : pkg === "sponsored" ? 2 : 1,
    startsAt: "2025-05-01",
    expiresAt: "2025-06-30",
    daysLeft: ((i * 3) % 14) + 2,
    paymentStatus: "paid",
    isSponsored: pkg === "sponsored" || i % 5 === 0,
    isUrgent: i % 4 === 0,
    isHighSalary: salary.includes("50") || salary.includes("40"),
    postedAt: "2025-05-20",
    applyUrl: "#",
  };
});

export type Campaign = {
  id: string;
  companyName: string;
  campaignTitle: string;
  campaignDescription: string;
  activeJobs: number;
  location: string;
  badge: string;
};

export const featuredCampaigns: Campaign[] = [
  {
    id: "c1",
    companyName: "Shojiki Ads Corp",
    campaignTitle: "Tuyển dụng Chuyên viên Kỹ thuật LED",
    campaignDescription:
      "Tham gia đội ngũ kỹ thuật vận hành hệ thống màn hình LED outdoor tại các vị trí trọng điểm ở TP. Hồ Chí Minh và Hà Nội.",
    activeJobs: 18,
    location: "HCM & Hà Nội",
    badge: "Gói Kim Cương",
  },
  {
    id: "c2",
    companyName: "Goldsun Media",
    campaignTitle: "Mở rộng đội ngũ Sales OOH toàn quốc",
    campaignDescription:
      "Chiến dịch tuyển dụng quy mô lớn cho mảng kinh doanh biển quảng cáo tấm lớn và pano toàn quốc, ưu tiên ứng viên có kinh nghiệm media.",
    activeJobs: 24,
    location: "Toàn quốc",
    badge: "Chiến Dịch Độc Quyền",
  },
  {
    id: "c3",
    companyName: "DatVietVAC",
    campaignTitle: "Tuyển Producer & Account cho Activation",
    campaignDescription:
      "Đội ngũ Activation và Experiential Marketing đang mở rộng cho các dự án thương hiệu quốc tế năm 2026.",
    activeJobs: 12,
    location: "TP. Hồ Chí Minh",
    badge: "Gói Kim Cương",
  },
];

export type Employer = {
  id: string;
  companyName: string;
  industry: string;
  location: string;
  activeJobs: number;
  isVerified: boolean;
  initial: string;
};

export const featuredEmployers: Employer[] = [
  {
    id: "e1",
    companyName: "Goldsun Media",
    industry: "OOH Media",
    location: "Hà Nội",
    activeJobs: 14,
    isVerified: true,
    initial: "G",
  },
  {
    id: "e2",
    companyName: "Kỷ Nguyên Group",
    industry: "Production",
    location: "TP.HCM",
    activeJobs: 9,
    isVerified: true,
    initial: "K",
  },
  {
    id: "e3",
    companyName: "DatVietVAC",
    industry: "Media Agency",
    location: "TP.HCM",
    activeJobs: 22,
    isVerified: true,
    initial: "D",
  },
  {
    id: "e4",
    companyName: "Vạn Xuân Media",
    industry: "Billboard",
    location: "Hà Nội",
    activeJobs: 7,
    isVerified: true,
    initial: "V",
  },
  {
    id: "e5",
    companyName: "LED Billboard Vietnam",
    industry: "LED Display",
    location: "Toàn quốc",
    activeJobs: 11,
    isVerified: true,
    initial: "L",
  },
  {
    id: "e6",
    companyName: "Outdoor Media Network",
    industry: "OOH Network",
    location: "TP.HCM",
    activeJobs: 16,
    isVerified: true,
    initial: "O",
  },
  {
    id: "e7",
    companyName: "Pano Group",
    industry: "Pano & Signage",
    location: "Đà Nẵng",
    activeJobs: 6,
    isVerified: true,
    initial: "P",
  },
  {
    id: "e8",
    companyName: "CityAds Media",
    industry: "Transit Media",
    location: "TP.HCM",
    activeJobs: 8,
    isVerified: true,
    initial: "C",
  },
];

export type Industry = {
  id: string;
  name: string;
  jobs: number;
  icon: "briefcase" | "wrench" | "palette" | "target";
};

export const industries: Industry[] = [
  { id: "sales", name: "Kinh Doanh & Sale OOH", jobs: 248, icon: "briefcase" },
  { id: "install", name: "Thi Công & Lắp Đặt", jobs: 167, icon: "wrench" },
  { id: "design", name: "Thiết Kế Đồ Họa 3D", jobs: 134, icon: "palette" },
  { id: "media", name: "Media Planning", jobs: 92, icon: "target" },
];

export type LatestJob = {
  id: string;
  jobTitle: string;
  companyName: string;
  companyLogo?: string;
  location: string;
  salary: string;
  jobType: string;
  category: string;
  experience: string;
  postedLabel: string;
  isUrgent?: boolean;
  isNew?: boolean;
  applyUrl: string;
};

const latestCompanies = [
  "SJK Group",
  "Goldsun Media",
  "DatVietVAC Group Holdings",
  "CityAds Media",
  "LED Billboard Vietnam",
  "Outdoor Media Network",
  "Vạn Xuân Media",
  "Pano Việt Nam",
  "MediaWorks Agency",
  "Kỷ Nguyên Group",
  "Saigon Signage",
  "Hà Nội OOH Media",
];

const latestTitles = [
  "Account Executive OOH",
  "Chuyên viên Media Planning Outdoor",
  "Nhân viên Thi công Biển Pano Quảng Cáo Ngoài Trời",
  "Designer 3D Visual Outdoor Advertising",
  "Kỹ sư Vận hành Màn hình LED Outdoor",
  "Sales Executive Pano Tấm Lớn",
  "Giám sát Thi công Biển Hiệu Và Billboard",
  "Activation Project Manager",
  "Chuyên viên Booking Vị trí Quảng Cáo Ngoài Trời",
  "Trưởng nhóm Kinh doanh Dự án OOH",
  "Nhân viên Kỹ thuật Lắp đặt LED",
  "Account Manager Agency OOH",
];

const latestLocations = [
  "Hà Nội",
  "TP. Hồ Chí Minh",
  "Đà Nẵng",
  "Bình Dương",
  "Hải Phòng",
  "Cần Thơ",
];

const latestSalaries = [
  "15 - 25 triệu",
  "20 - 35 triệu",
  "10 - 18 triệu",
  "Thoả thuận",
  "18 - 28 triệu",
  "12 - 20 triệu",
  "25 - 40 triệu",
  "30 - 50 triệu",
];

const latestCategories = [
  "Kinh doanh",
  "Media Planning",
  "Thi công",
  "Thiết kế",
  "Kỹ thuật",
  "Activation",
  "Booking",
  "Quản lý",
];

const latestExperiences = [
  "Không yêu cầu",
  "6 tháng",
  "1 năm",
  "1 - 2 năm",
  "2 năm",
  "3 năm",
];

const latestPostedLabels = [
  "Hôm nay",
  "Hôm nay",
  "1 ngày trước",
  "1 ngày trước",
  "2 ngày trước",
  "2 ngày trước",
  "3 ngày trước",
  "4 ngày trước",
];

export const latestJobs: LatestJob[] = Array.from({ length: 24 }).map(
  (_, i) => ({
    id: `latest-job-${i + 1}`,
    jobTitle: latestTitles[i % latestTitles.length],
    companyName: latestCompanies[i % latestCompanies.length],
    companyLogo: "https://sjkgroup.vn/wp-content/uploads/2023/04/logo-sjk-group.svg",
    location: latestLocations[i % latestLocations.length],
    salary: latestSalaries[i % latestSalaries.length],
    jobType: "Full-time",
    category: latestCategories[i % latestCategories.length],
    experience: latestExperiences[i % latestExperiences.length],
    postedLabel: latestPostedLabels[i % latestPostedLabels.length],
    isUrgent: i % 5 === 0,
    isNew: i < 6,
    applyUrl: "#",
  })
);
import {
    ArrowUpRight,
    BadgeCheck,
    BriefcaseBusiness,
    Building2,
    Copy,
    Facebook,
    Globe,
    Linkedin,
    MapPin,
    Search,
    Share2,
    Users,
} from "lucide-react";

const company = {
    name: "Công ty Cổ phần Truyền thông SJK Group",
    logo: "https://sjkgroup.vn/wp-content/uploads/2023/04/logo-sjk-group.svg",
    website: "sjkgroup.vn",
    industry: "Quảng cáo ngoài trời / OOH Media",
    size: "25 - 99 nhân viên",
    taxCode: "0312345678",
    location:
        "Tầng 5, Tòa nhà SJK, Quận Cầu Giấy, Thành phố Hà Nội",
    description:
        "SJK Group là đơn vị hoạt động trong lĩnh vực quảng cáo ngoài trời, truyền thông thương hiệu, billboard, LED outdoor và triển khai các chiến dịch truyền thông tại điểm bán. Công ty tập trung xây dựng hệ sinh thái giải pháp OOH hiện đại, hỗ trợ doanh nghiệp tiếp cận khách hàng tại các vị trí trọng điểm.",
    detail:
        "Với đội ngũ nhân sự trẻ, năng động và am hiểu thị trường, SJK Group cung cấp các giải pháp từ tư vấn vị trí, thiết kế ấn phẩm, thi công biển quảng cáo, vận hành màn hình LED đến đo lường hiệu quả chiến dịch. Môi trường làm việc phù hợp với ứng viên yêu thích truyền thông, kinh doanh, sáng tạo và triển khai dự án thực tế.",
};

const companyJobs = [
    {
        id: "job-1",
        title: "Account Executive OOH",
        salary: "15 - 25 triệu",
        location: "Hà Nội",
        type: "Full-time",
        isUrgent: true,
    },
    {
        id: "job-2",
        title: "Chuyên viên Media Planning Outdoor",
        salary: "20 - 35 triệu",
        location: "Hồ Chí Minh",
        type: "Full-time",
        isUrgent: false,
    },
    {
        id: "job-3",
        title: "Designer 3D Visual Outdoor Advertising",
        salary: "Thoả thuận",
        location: "Hà Nội",
        type: "Full-time",
        isUrgent: false,
    },
    {
        id: "job-4",
        title: "Kỹ sư Vận hành Màn hình LED Outdoor",
        salary: "18 - 28 triệu",
        location: "Bình Dương",
        type: "Theo ca",
        isUrgent: true,
    },
];

const relatedCompanies = [
    {
        id: "c1",
        name: "Goldsun Media",
        industry: "OOH Media",
        logo: "https://sjkgroup.vn/wp-content/uploads/2023/04/logo-sjk-group.svg",
    },
    {
        id: "c2",
        name: "DatVietVAC Group",
        industry: "Media Agency",
        logo: "https://sjkgroup.vn/wp-content/uploads/2023/04/logo-sjk-group.svg",
    },
    {
        id: "c3",
        name: "LED Billboard Vietnam",
        industry: "LED Outdoor",
        logo: "https://sjkgroup.vn/wp-content/uploads/2023/04/logo-sjk-group.svg",
    },
    {
        id: "c4",
        name: "Outdoor Media Network",
        industry: "Pano / Billboard",
        logo: "https://sjkgroup.vn/wp-content/uploads/2023/04/logo-sjk-group.svg",
    },
];

function CompanyJobCard({
    job,
}: {
    job: {
        id: string;
        title: string;
        salary: string;
        location: string;
        type: string;
        isUrgent: boolean;
    };
}) {
    return (
        <article className="group rounded-xl border border-border bg-white p-3 transition hover:border-primary/40 hover:bg-primary/5">
            <div className="grid grid-cols-[64px_minmax(0,1fr)_auto] gap-2">
                <div className="flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-md border border-slate-200 bg-white p-1.5">
                    <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                    />
                </div>

                <div className="min-w-0">
                    <a
                        href="#"
                        title={job.title}
                        className="line-clamp-2 text-[13px] font-semibold leading-[1.25] text-slate-950 transition group-hover:text-primary"
                    >
                        {job.title}
                    </a>

                    <p className="mt-1 truncate text-[12px] font-medium uppercase text-slate-500">
                        {company.name}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-normal text-emerald-700">
                            {job.salary}
                        </span>

                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-normal text-slate-600">
                            <MapPin size={10} />
                            {job.location}
                        </span>

                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-normal text-slate-600">
                            {job.type}
                        </span>
                    </div>
                    {job.isUrgent && (
                        <div className="mt-2 text-[10px] font-medium text-red-600">
                            Tuyển gấp
                        </div>
                    )}
                </div>

                <a
                    href="#"
                    aria-label="Xem chi tiết việc làm"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-primary hover:text-white"
                >
                    <ArrowUpRight size={14} />
                </a>
            </div>

        </article>
    );
}

export function CompanyDetailPage() {
    return (
        <main className="min-h-screen bg-slate-100 pt-24">
            <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-3 text-xs text-slate-500">
                    Trang chủ / Công ty / {company.name}
                </div>

                {/* Company hero */}
                <section className="overflow-hidden rounded-2xl border border-border bg-white">
                    <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                        <div className="flex min-w-0 items-center gap-4">
                            <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-3">
                                <img
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div className="min-w-0">
                                <h1 className="line-clamp-2 text-xl font-bold leading-tight text-slate-950 sm:text-2xl">
                                    {company.name}
                                </h1>

                                <a
                                    href="#"
                                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-primary"
                                >
                                    <Globe size={14} />
                                    {company.website}
                                </a>
                            </div>
                        </div>

                        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover">
                            <BadgeCheck size={16} />
                            Theo dõi công ty
                        </button>
                    </div>

                    <div className="flex border-t border-border px-4 sm:px-5">
                        <a
                            href="#company-about"
                            className="border-b-2 border-primary px-1 py-3 text-sm font-semibold text-primary"
                        >
                            Trang chủ
                        </a>

                        <a
                            href="#company-jobs"
                            className="ml-6 px-1 py-3 text-sm font-semibold text-slate-500 hover:text-primary"
                        >
                            Tin tuyển dụng ({companyJobs.length})
                        </a>
                    </div>
                </section>

                <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
                    {/* Left content */}
                    <div className="space-y-5">
                        {/* About */}
                        <section
                            id="company-about"
                            className="rounded-2xl border border-border bg-white p-5"
                        >
                            <h2 className="text-lg font-bold text-slate-950">
                                Giới thiệu công ty
                            </h2>

                            <div className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                                <p>{company.description}</p>
                                <p>{company.detail}</p>
                            </div>

                            <button className="mt-4 text-sm font-semibold text-primary hover:underline">
                                Xem thêm
                            </button>
                        </section>

                        {/* Jobs */}
                        <section
                            id="company-jobs"
                            className="rounded-2xl border border-border bg-white p-5"
                        >
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <h2 className="text-lg font-bold text-slate-950">
                                    Tin tuyển dụng
                                </h2>

                                <div className="flex flex-col gap-2 sm:flex-row">
                                    <div className="flex h-9 items-center gap-2 rounded-full border border-border bg-white px-3">
                                        <Search size={14} className="text-slate-400" />
                                        <input
                                            placeholder="Tên công việc, vị trí ứng tuyển..."
                                            className="w-full bg-transparent text-xs outline-none placeholder:text-slate-400 sm:w-56"
                                        />
                                    </div>

                                    <button className="h-9 rounded-full bg-primary px-4 text-xs font-semibold text-white hover:bg-primary-hover">
                                        Tìm kiếm
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 space-y-3">
                                {companyJobs.map((job) => (
                                    <CompanyJobCard key={job.id} job={job} />
                                ))}
                            </div>

                            <div className="mt-5 text-center">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5"
                                >
                                    Xem thêm
                                    <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </section>

                        {/* Related companies */}
                        <section className="rounded-2xl border border-border bg-white p-5">
                            <div className="rounded-xl bg-gradient-to-r from-primary to-primary-hover p-4 text-white">
                                <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                                    Gợi ý doanh nghiệp
                                </p>
                                <h2 className="mt-1 text-lg font-bold">
                                    Thương hiệu cùng lĩnh vực OOH
                                </h2>
                                <p className="mt-1 text-sm text-white/80">
                                    Các công ty đang tuyển dụng trong ngành quảng cáo ngoài trời,
                                    media, billboard và truyền thông.
                                </p>
                            </div>

                            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {relatedCompanies.map((item) => (
                                    <a
                                        key={item.id}
                                        href="#"
                                        className="flex items-center gap-3 rounded-xl border border-border bg-white p-3 transition hover:border-primary/40 hover:bg-primary/5"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white p-2">
                                            <img
                                                src={item.logo}
                                                alt={`${item.name} logo`}
                                                className="h-full w-full object-contain"
                                            />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="truncate text-sm font-semibold text-slate-950">
                                                {item.name}
                                            </h3>
                                            <p className="mt-1 truncate text-xs text-slate-500">
                                                {item.industry}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right sidebar */}
                    <aside className="space-y-5">
                        <section className="rounded-2xl border border-border bg-white p-5">
                            <h2 className="text-base font-bold text-slate-950">
                                Thông tin chung
                            </h2>

                            <div className="mt-4 space-y-4">
                                <div className="flex gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                                        <Building2 size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Mã số thuế</p>
                                        <p className="mt-0.5 text-sm font-semibold text-slate-800">
                                            {company.taxCode}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                                        <Users size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Quy mô</p>
                                        <p className="mt-0.5 text-sm font-semibold text-slate-800">
                                            {company.size}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                                        <BriefcaseBusiness size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Lĩnh vực hoạt động</p>
                                        <p className="mt-0.5 text-sm font-semibold text-slate-800">
                                            {company.industry}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-border bg-white p-5">
                            <h2 className="text-base font-bold text-slate-950">
                                Địa điểm công ty
                            </h2>

                            <div className="mt-3 flex gap-2 text-sm leading-5 text-slate-600">
                                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                                <span>{company.location}</span>
                            </div>

                            <div className="mt-4 overflow-hidden rounded-xl border border-border bg-slate-100">
                                <div className="flex h-40 items-center justify-center bg-[linear-gradient(135deg,#e2e8f0_25%,transparent_25%),linear-gradient(225deg,#e2e8f0_25%,transparent_25%),linear-gradient(45deg,#e2e8f0_25%,transparent_25%),linear-gradient(315deg,#e2e8f0_25%,#f8fafc_25%)] bg-[length:24px_24px] bg-[position:12px_0,12px_0,0_0,0_0]">
                                    <div className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white">
                                        Bản đồ demo
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-border bg-white p-5">
                            <h2 className="text-base font-bold text-slate-950">
                                Chia sẻ công ty
                            </h2>

                            <p className="mt-3 text-xs font-semibold text-slate-600">
                                Sao chép đường dẫn
                            </p>

                            <div className="mt-2 flex h-10 items-center gap-2 rounded-xl border border-border bg-slate-50 px-3">
                                <span className="min-w-0 flex-1 truncate text-xs text-slate-500">
                                    vieclamooh.vn/cong-ty/sjk-group
                                </span>
                                <button className="text-slate-500 hover:text-primary">
                                    <Copy size={15} />
                                </button>
                            </div>

                            <p className="mt-4 text-xs font-semibold text-slate-600">
                                Chia sẻ qua mạng xã hội
                            </p>

                            <div className="mt-2 flex gap-2">
                                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white">
                                    <Facebook size={16} />
                                </button>
                                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white">
                                    <Linkedin size={16} />
                                </button>
                                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white">
                                    <Share2 size={16} />
                                </button>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </main>
    );
}
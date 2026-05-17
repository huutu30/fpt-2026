import { internetData } from './products/internetData';
import { truyenHinhData } from './products/truyenHinhData';
import { cameraData } from './products/cameraData';
import { wifi7Data } from './products/wifi7Data';


// Cố gắng tự động tối ưu SEO bằng cách thêm alt cho hình ảnh
const autoOptimizeSEO = (products) => {
  return products.map((item) => {
    let opt = { ...item };
    if (!opt.alt && opt.name) opt.alt = `${opt.name} - Internet FPT`;
    if (!opt.path) {
      opt.path = `/${(opt.name || "")
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^a-z0-9-]/g, "")}`;
    }
    opt.btnTitle = `Đăng ký gói ${opt.name} ngay hôm nay`;
    return opt;
  });
};

export const BANNER_DATA = [
  {
    id: 1,
    image: "https://hi-static.fpt.vn/sys/shop/prod/2026-05-05/69f946dd13884_uu-dai-lap-mang-giam-50000-vnd-fpt.png",
    mobileImage: "https://hi-static.fpt.vn/sys/shop/prod/2026-05-05/69f946dd13884_uu-dai-lap-mang-giam-50000-vnd-fpt.png",
    link: "/khuyen-mai"
  },
  {
    id: 2,
    image: "https://hi-static.fpt.vn/sys/shop/prod/2026-05-08/69fdb4a3a067a_gioi-thieu-ban-moi-nhan-300k.jpg",
    mobileImage: "https://hi-static.fpt.vn/sys/shop/prod/2026-05-08/69fdb4a3a067a_gioi-thieu-ban-moi-nhan-300k.jpg",
    link: "/khuyen-mai"
  },
  {
    id: 3,
    image: "https://hi-static.fpt.vn/sys/shop/prod/2026-05-15/6a06bf94a53b0_1920X717.jpg",
    mobileImage: "https://hi-static.fpt.vn/sys/shop/prod/2026-05-15/6a06bf94a53b0_1920X717.jpg",
    link: "/khuyen-mai"
  },
  {
    id: 4,
    image: "https://hi-static.fpt.vn/sys/shop/prod/2026-04-16/69e041bf8f173_1_1920x717%20%283%29.jpg",
    mobileImage: "https://hi-static.fpt.vn/sys/shop/prod/2026-04-16/69e041bf8f173_1_1920x717%20%283%29.jpg",
    link: "/khuyen-mai"
  },
  {
    id: 5,
    image: "https://hi-static.fpt.vn/sys/shop/prod/2026-05-05/69f9b4c70ca43_uu-dai-1-trieu-3-camera-fpt.jpg",
    mobileImage: "https://hi-static.fpt.vn/sys/shop/prod/2026-05-05/69f9b4c70ca43_uu-dai-1-trieu-3-camera-fpt.jpg",
    link: "/khuyen-mai"
  },
  {
    id: 6,
    image: "https://hi-static.fpt.vn/sys/shop/prod/2026-05-13/6a046076700ba_mo-ruong-nhan-qua-hi-fpt.png",
    mobileImage: "https://hi-static.fpt.vn/sys/shop/prod/2026-05-13/6a046076700ba_mo-ruong-nhan-qua-hi-fpt.png",
    link: "/khuyen-mai"
  }
];

export const QUICK_LINKS = [
  { id: 'internet', label: 'Internet' },
  { id: 'fptplay', label: 'FPT Play' },
  { id: 'smart-device', label: 'Thiết bị thông minh' },
];

export const CATEGORY_DATA = [
  {
    id: "ca-nhan",
    type: "INTERNET",
    name: "CÁ NHÂN",
    color: "#f26f21",
    gradient: "linear-gradient(160deg, #f26f21 0%, #ff9f4a 100%)",
    image: "/images/product_internet_per_b2dcc811.webp",
    link: "/internet/ca-nhan",
  },
  {
    id: "gia-dinh",
    type: "INTERNET",
    name: "GIA ĐÌNH",
    color: "#1c6dd0",
    gradient: "linear-gradient(160deg, #1c6dd0 0%, #3b8fe8 100%)",
    image: "/images/product_internet_fam_e857243b.webp",
    link: "/internet/gia-dinh",
  },
  {
    id: "game-thu",
    type: "INTERNET",
    name: "GAME THỦ",
    color: "#6a0dad",
    gradient: "linear-gradient(160deg, #6a0dad 0%, #9b27af 100%)",
    image: "/images/product_internet_gam_75a8e8cf.webp",
    link: "/internet/game-thu",
  },
  {
    id: "giai-tri",
    type: "TRUYỀN HÌNH",
    name: "GIẢI TRÍ",
    color: "#111111",
    gradient: "linear-gradient(160deg, #1a1a1a 0%, #333333 100%)",
    image: "/images/product_tv_entertain_0ded04ec.webp",
    link: "/giai-tri/fpt-play",
  },
  {
    id: "camera",
    type: "THIẾT BỊ",
    name: "CAMERA",
    color: "#b05e00",
    gradient: "linear-gradient(160deg, #b05e00 0%, #d97b1a 100%)",
    image: "/images/product_camera_png_88f5e00f.webp",
    link: "/thiet-bi/camera",
  },
];


export const PRODUCT_DATA = {
  ...internetData,
  ...truyenHinhData,
  ...cameraData,
  ...wifi7Data,
};

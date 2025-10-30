"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedin, 
  FaTelegram, 
  FaReddit, 
  FaTiktok, 
  FaVk,
  FaGoogle,
  FaUser,
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaArrowLeft,
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaMinus,
  FaHome,
  FaCog,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaUnlock,
  FaEdit,
  FaTrash,
  FaDownload,
  FaUpload,
  FaShare,
  FaCopy,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";

export type IconName =
  | "facebook"
  | "instagram"
  | "twitter"
  | "youtube"
  | "linkedin"
  | "telegram"
  | "reddit"
  | "tiktok"
  | "vkontakte"
  | "gmail"
  | "user"
  | "menu"
  | "close"
  | "search"
  | "cart"
  | "heart"
  | "star"
  | "check"
  | "times"
  | "arrow-right"
  | "arrow_right"
  | "arrow-left"
  | "chevron-down"
  | "chevron-up"
  | "chevron-left"
  | "chevron-right"
  | "plus"
  | "minus"
  | "home"
  | "settings"
  | "envelope"
  | "phone"
  | "map-marker"
  | "eye"
  | "eye-slash"
  | "lock"
  | "unlock"
  | "edit"
  | "trash"
  | "download"
  | "upload"
  | "share"
  | "copy"
  | "external-link"
  | "info"
  | "warning"
  | "success"
  | "error"
  | "shield"
  | "users"
  | "trending-up"
  | "zap";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
  style?: React.CSSProperties;
}

const iconMap = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  telegram: FaTelegram,
  reddit: FaReddit,
  tiktok: FaTiktok,
  vkontakte: FaVk,
  gmail: FaGoogle,
  user: FaUser,
  menu: FaBars,
  close: FaTimes,
  search: FaSearch,
  cart: FaShoppingCart,
  heart: FaHeart,
  star: FaStar,
  check: FaCheck,
  times: FaTimes,
  "arrow-right": FaArrowRight,
  "arrow_right": FaArrowRight,
  "arrow-left": FaArrowLeft,
  "chevron-down": FaChevronDown,
  "chevron-up": FaChevronUp,
  "chevron-left": FaChevronLeft,
  "chevron-right": FaChevronRight,
  plus: FaPlus,
  minus: FaMinus,
  home: FaHome,
  settings: FaCog,
  envelope: FaEnvelope,
  phone: FaPhone,
  "map-marker": FaMapMarkerAlt,
  eye: FaEye,
  "eye-slash": FaEyeSlash,
  lock: FaLock,
  unlock: FaUnlock,
  edit: FaEdit,
  trash: FaTrash,
  download: FaDownload,
  upload: FaUpload,
  share: FaShare,
  copy: FaCopy,
  "external-link": FaExternalLinkAlt,
  info: FaInfoCircle,
  warning: FaExclamationTriangle,
  success: FaCheckCircle,
  error: FaTimesCircle,
  shield: FaLock,
  users: FaUser,
  "trending-up": FaArrowRight,
  zap: FaStar,
};

const sizeClasses = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = "md", 
  className,
  style 
}) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent 
      className={cn(sizeClasses[size], className)} 
      style={style}
    />
  );
};

export default Icon;
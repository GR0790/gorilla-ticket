/** @type {import('tailwindcss').Config} */
module.exports = {
  // OS·브라우저 다크모드를 따라가지 않는다. 'media'로 바꾸면 다크모드 기기에서 어두운 화면이 되므로
  // 반드시 클래스 기반('class')으로 두고, .dark 클래스를 붙이지 않는다.
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif",
        ],
        display: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif",
        ],
      },
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          soft: "#475569",
          muted: "#64748B",
        },
        night: {
          DEFAULT: "#0B1220",
          deep: "#060A12",
          soft: "#16203A",
        },
        frost: {
          DEFAULT: "#F8FAFC",
          light: "#FFFFFF",
          deep: "#F1F5F9",
        },
        azure: {
          DEFAULT: "#2563EB",
          light: "#60A5FA",
          deep: "#1D4ED8",
          soft: "#DBEAFE",
        },
        sky: {
          DEFAULT: "#38BDF8",
          light: "#7DD3FC",
          deep: "#0EA5E9",
        },
        steel: "#CBD5E1",
        line: "#E2E8F0",
      },
      letterSpacing: {
        widest2: "0.24em",
      },
      maxWidth: {
        wrap: "1200px",
        prose2: "68ch",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        sweep: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
        /* 상담 카드 클릭: 눌렀다가 살짝 튀어 오르는 반동 */
        "pass-bounce": {
          "0%": { transform: "scale(1)" },
          "26%": { transform: "scale(1.04)" },
          "60%": { transform: "scale(0.984)" },
          "100%": { transform: "scale(1)" },
        },
        "pass-glow": {
          "0%": { opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        rise: "rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        fade: "fade 1.1s ease both",
        "pass-bounce": "pass-bounce 0.68s cubic-bezier(0.33, 1, 0.68, 1) both",
        "pass-glow": "pass-glow 0.9s ease-out both",
      },
      transitionProperty: {
        border: "border-color",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

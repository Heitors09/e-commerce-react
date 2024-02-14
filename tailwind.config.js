/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        ProtestRiot: "Protest Riot",
      },
      backgroundImage: {
        shirtStyle:
          "url(https://i.pinimg.com/564x/21/c0/67/21c0678b96c3c579be0ccaefc0622e0d.jpg)",
        louge:
          "url(https://i.pinimg.com/564x/49/47/a4/4947a44e5a02c7585732d4854b728cf4.jpg)",
        jacket:
          "url(https://i.pinimg.com/564x/c2/a7/0e/c2a70e903b7d4f2b9f44fc60d08d465a.jpg)",
        dresses:
          "url(https://i.pinimg.com/564x/9b/3e/55/9b3e5576edf9e22e57f6d7229055d235.jpg)",
        jeans:
          "url(https://i.pinimg.com/564x/9c/a9/13/9ca913d9d1ce2ecf1e6cc25214f0abec.jpg)",
      },
    },
  },
  plugins: [],
};

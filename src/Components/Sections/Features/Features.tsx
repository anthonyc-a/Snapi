import "./Features.css";
import GridItem from "./GridItem";

const icon1 = (
  <svg
    width="57"
    height="50"
    viewBox="0 0 57 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85247 16.4524L9.20333 44.8135H46.8334L50.1843 16.4524L39.7359 23.3848L28.0171 7.05391L16.2982 23.3848L5.85247 16.4524ZM4.05076 9.02358L14.9912 16.2846L25.8977 1.08657C26.7335 -0.078923 28.3607 -0.349308 29.5298 0.482849C29.7667 0.648342 29.9698 0.853476 30.139 1.08657L41.043 16.2846L51.986 9.02358C53.1836 8.23104 54.8005 8.55273 55.5998 9.74619C55.9409 10.259 56.0893 10.8767 56.0163 11.4874L51.736 47.711C51.5824 49.0163 50.4707 50 49.148 50H6.88613C5.56608 50 4.45432 49.0163 4.29812 47.711L0.0177842 11.4851C-0.148864 10.0609 0.874343 8.77417 2.30376 8.60634C2.91561 8.53642 3.53526 8.68325 4.04815 9.02358H4.05076ZM28.0171 34.4383C25.1401 34.4383 22.8073 32.1167 22.8073 29.2519C22.8073 26.3871 25.1401 24.0654 28.0171 24.0654C30.8967 24.0654 33.2295 26.3871 33.2295 29.2519C33.2295 32.1167 30.8967 34.4383 28.0171 34.4383Z"
      fill="#344774"
    />
  </svg>
);
const icon2 = (
  <svg
    width="57"
    height="50"
    viewBox="0 0 57 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M43.4103 37.5V50H38.3838V37.5C38.3838 26.3727 45.029 16.787 54.5863 12.4606L56.6667 17.0093C48.5917 20.6644 43.4103 28.6759 43.4103 37.5ZM18.2803 37.5V50H13.2563V37.5C13.2563 28.6759 8.07507 20.6667 0 17.0116L2.08043 12.4606C11.9473 16.9259 18.2829 26.7153 18.2803 37.5ZM28.3334 25C21.3943 25 15.7696 19.4028 15.7696 12.5C15.7696 5.59723 21.3943 0 28.3334 0C35.2724 0 40.8971 5.59723 40.8971 12.5C40.8971 19.4028 35.2724 25 28.3334 25ZM28.3334 20C32.4968 20 35.8732 16.6412 35.8732 12.5C35.8732 8.3588 32.4968 5 28.3334 5C24.1699 5 20.7936 8.3588 20.7936 12.5C20.7936 16.6412 24.1699 20 28.3334 20Z"
      fill="#344774"
    />
  </svg>
);

const icon3 = (
  <svg
    width="42"
    height="50"
    viewBox="0 0 42 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.7695 6.50758L9.3457 17.8994C3.03856 24.1902 3.03856 34.3898 9.3478 40.6782C15.657 46.969 25.8841 46.969 32.1933 40.6782C38.5004 34.3874 38.5004 24.1902 32.1933 17.8994L20.7695 6.50758ZM20.7695 0L35.4545 14.6456C43.5664 22.7331 43.5664 35.8469 35.4545 43.9344C27.3448 52.0219 14.1942 52.0219 6.08232 43.9344C-2.02744 35.8469 -2.02744 22.7331 6.08232 14.6456L20.7695 0ZM23.0766 24.6863H28.8456L18.4624 39.645V29.2888H12.6913L23.0766 14.3325V24.6863Z"
      fill="#344774"
    />
  </svg>
);

const icon4 = (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M25 50C11.1922 50 0 38.8078 0 25C0 11.1921 11.1922 0 25 0C38.8079 0 50 11.1921 50 25C50 38.8078 38.8079 50 25 50ZM25 45C36.0463 45 45 36.0463 45 25C45 13.9537 36.0463 5 25 5C13.9537 5 5.00004 13.9537 5.00004 25C5.00004 36.0463 13.9537 45 25 45ZM15 27.5H35C35 33.0231 30.5231 37.5 25 37.5C19.4769 37.5 15 33.0231 15 27.5H15Z"
      fill="#344774"
    />
  </svg>
);

const Features = () => {
  return (
    <div className="features">
      <div className="grid-container">
        <GridItem
          icon={icon1}
          header="White Label"
          description="Increase brand awareness through custom branding and artwork."
        />
        <GridItem
          icon={icon2}
          header="Omnichannel"
          description="Activate and retain audiences using both online and real world touchpoints."
        />
        <GridItem
          icon={icon3}
          header="Deep Insights"
          description="Better understand audiences through realtime analytics and CX funnels."
        />
        <GridItem
          icon={icon4}
          header="User Centric"
          description="Audience gratification through user centric features personalized for individual needs."
        />
      </div>
    </div>
  );
};

export default Features;

const size={
  mobile: "800px",
  tablet: "850px",
  laptop: "1500px",
  // desktop: "1300px"
}

const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
}

const theme = {
  device
}
export default theme;
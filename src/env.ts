const env = {
  DEVICE: process.env.DEVICE as "mobile" | "desktop" | "fallback",
};

export default env;

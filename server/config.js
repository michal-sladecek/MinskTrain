const getEnv = (name, defaultValue) => {
  const res = process.env[name]
  if (res === undefined) {
    return defaultValue
  }
  return res
}

export default {
  port: getEnv('MINSKTRAIN_PORT', 8000),
  host: getEnv('MINSKTRAIN_HOST', 'localhost'),
}

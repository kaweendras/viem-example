const encodeMSG = (msg: any): string => {
  const eventResult = JSON.stringify(
    msg,
    (key, value) => (typeof value === "bigint" ? value.toString() : value),
    2
  );
  let formattedMsg = `<b>X value Changed</b> 🚀\n
    <code>${eventResult}</code>\n▶️Project - <a href="https://github.com/kaweendras/viem-example">VIEM Examples</a>◀️`;

  formattedMsg = encodeURIComponent(formattedMsg);
  return formattedMsg;
};

export default encodeMSG;

export default function TOC({ content }: { content: string }) {
  const getHeadings = (source: string) => {
    const regex = /^(#|##|###) (.*$)/gim;
    const emojiRegex =
      /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

    if (source.match(regex)) {
      return source.match(regex)?.map((heading: string) => ({
        text: heading
          .replace("#", "")
          .replace("#", "")
          .replace("#", "")
          .endsWith(".")
          ? heading
              .replace("#", "")
              .replace("#", "")
              .replace("#", "")
              .slice(0, -1)
          : heading.replace("#", "").replace("#", "").replace("#", ""),
        link: heading
          .replace("# ", "")
          .replace("#", "")
          .replace("#", "")
          .replace(/ /g, "-")
          .replace("?", "")
          .replace("(", "")
          .replace(")", "")
          .replace("[", "")
          .replace("]", "")
          .replace(/\./g, "")
          .replace(emojiRegex, "")
          .toLowerCase(),
        indent: heading.match(/#/g)?.length,
      }));
    }
    return [];
  };

  const HeadingArr = getHeadings(content);

  const getIndentMargin = (indent?: number) => {
    switch (indent) {
      case 1:
        return "ml-0";
      case 2:
        return "ml-8";
      case 3:
        return "ml-16";
      default:
        return "ml-0";
    }
  };

  return (
    <div className=" fixed -right-4 top-20 mr-8 hidden border-l-2 pl-8 xl:flex xl:flex-col xl:gap-1">
      <div className="">목차</div>
      {HeadingArr?.map((heading, index) => (
        <div
          key={index}
          className={`${getIndentMargin(heading.indent)}  font-medium w-56`}
        >
          <a href={"#" + heading.link}>{heading.text}</a>
        </div>
      ))}
    </div>
  );
}

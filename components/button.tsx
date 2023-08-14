import {css} from "glamor";

const Button = ({
  text,
  secondaryText,
  color = "#070707",
}: {
  text: string;
  secondaryText?: string;
  color?: string;
}) => {
  var d = color.slice(0, -2);
  console.log(d);
  let rule = css({
    backgroundColor: color,
    ":hover": {
      backgroundColor: color.slice(0, -4) + "65",
    },
  });

  return (
    <div
      // style={{backgroundColor: color}}
      className={`flex items-center gap-2 px-3 py-2 text-sm font-medium text-white rounded-lg max-w-fit ${rule} `}
    >
      <span>{text}</span>
      {secondaryText && (
        <span className="text-neutral-300 font-light">{secondaryText}</span>
      )}
    </div>
  );
};

export default Button;

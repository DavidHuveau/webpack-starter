// import $ from "jQuery";

const log = value => {
  console.log(value);
};

const backgroundRed = () => {
  jQuery("body").css("backgroundColor", "red");
  $(".hello").css("backgroundColor", "yellow");
};

export { log, backgroundRed };
export default log;

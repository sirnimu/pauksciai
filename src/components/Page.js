import classes from "./Page.module.scss";

const Page = (props) => {
  return <div className={classes.page}>{props.children}</div>;
};

export default Page;

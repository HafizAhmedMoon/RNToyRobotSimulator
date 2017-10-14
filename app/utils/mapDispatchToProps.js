export function mapDispatchToProps(actions) {
  return (...args) => {
    const [dispatch] = args;
    const map = {};

    return Object.keys(actions).reduce((props, actionProp) => {
      props[actionProp] = (...args) => dispatch(actions[actionProp](...args));
      return props;
    }, map);
  };
}

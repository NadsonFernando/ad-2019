import _ from "underscore";

export default {
  raffle(items) {
    let itemsRaffle = [...items];
    let sorted = [];
    let result = {};

    function exec(current) {
      let itemsWithoutCurrent = _.without(itemsRaffle, current);

      if (_.isEmpty(itemsWithoutCurrent)) {
        return;
      }

      let indexSorted = Math.floor(Math.random() * itemsWithoutCurrent.length);

      let selected = itemsWithoutCurrent[indexSorted];
      result[current] = selected;

      sorted = _.uniq([...sorted, current]);

      if (_.isEqual(_.size(sorted), _.size(itemsRaffle))) {
        return;
      }

      exec(selected);
    }

    exec(_.first(itemsRaffle));

    return result;
  },
};

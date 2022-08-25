module.exports = (sequelize, Sequelize) => {
    const State = sequelize.define("state", {
        type: {
            type: Sequelize.STRING
        }
    });
    return State;
};
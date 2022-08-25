module.exports = (sequelize, Sequelize) => {
    const Issue = sequelize.define("issue", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        duration: {
            type: Sequelize.TIME
        }
    });
    return Issue;
};
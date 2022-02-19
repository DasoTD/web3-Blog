static async trending(){
    const trendP = await findAll({
      attributes: [
        "Title",
        "InvestmentModeId",[
          sequelize.fn("sum", sequelize.col("minimumAmount")), "totalAmount"
        ],
      ],
      group: ["Title"],
      include: [
        {
          model: Flexi,
          as: "FlexiBids",
        },
        {
          model: Fixed,
          as: "FixedSubscribers",
        },
      ],
      order: [["TotalAmount", "DESC"]]
    });
    return trendP;
  }

  
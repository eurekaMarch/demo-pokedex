const pool = require("../DB/pool");
const common = require("./common/common");

const votePokemon = async (req, res) => {
  let responseData = {};
  let client = await pool.connect();
  await client.query("BEGIN");
  let tokenObj = { user_id: req._user.user_id };

  try {
    let data = req.body;
    let voteItem = data.item;
    let user_uuid = req._user.user_id;

    for (const v of voteItem) {
      let sql = `INSERT INTO public.vote
        (pokemon_id, user_uuid, create_date, create_by)
        VALUES($1, $2, now(), $3)`;

      let param = [v.id, user_uuid, user_uuid];
      let response = await pool.query(sql, param);
      console.log(response);
    }

    responseData.success = true;
    client.query("COMMIT");
  } catch (error) {
    console.log(error);
    client.query("ROLLBACK");
    responseData.success = false;
  } finally {
    client.release();
  }

  responseData.token = await common.commonService.generateToken(tokenObj);
  res.status(200).send(responseData);
  return res.end;
};

module.exports = votePokemon;

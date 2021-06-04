export const currentUserID = `xxxx`;

// В предложенном API есть метод `Movie Comments`, однако, указанные в нем GET запросы не работают (404), из-за этого был сделан черновой моковый вариант работы с комментариями.

const QUANTITY_MOCK_COMMENTS = 10;

const templateComment = {
  id: ``,
  author: `Bob`,
  userId: `123`,
  text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis hic vitae, nulla esse vel ipsum laborum velit sint assumenda reiciendis quaerat nam voluptate nihil quod praesentium sapiente numquam perferendis fugiat?`,
  date: `05.10.2020`,
}

const generateComments = () => {
  const result = [];

  for (let i = 0; i < QUANTITY_MOCK_COMMENTS; i++) {
    result[i] = Object.assign({}, templateComment);
    result[i].id = i;
  }

  return result;
}

export const mockComments = generateComments();

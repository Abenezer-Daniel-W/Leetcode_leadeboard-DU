import { LeetCode } from "leetcode-query";

const leetcode = new LeetCode();
const user = await leetcode.user("chickenabe");

console.log(user.matchedUser.submitStats);

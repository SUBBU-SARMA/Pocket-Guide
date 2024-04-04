var intersect = function (nums1, nums2) {
  let result = [];
  for (let i = nums1.length - 1; i >= 0; i--) {
    for (let j = nums2.length - 1; j >= 0; j--) {
      if (nums1[i] == nums2[j]) {
        console.log(nums1[i], nums2[j]);
        result.push(nums1[i]);
        nums1.splice(i, 1);
        nums2.splice(j, 1);
      }
    }
  }
  return result;
};
console.log(intersect([1, 2, 2, 1], [2, 2]));

function powerSet(nums) {
   const result = [[]];

   for (const num of nums) {
      const lengthData = result.length;

      for (let i = 0; i < lengthData; i++) {
         const subset = result[i];
         result.push([...subset, num]);
      }
   }

   return result;
}

// test
const nums1 = [1, 2, 3];
const nums2 = [0];

console.log(powerSet(nums1));
console.log(powerSet(nums2));

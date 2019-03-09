#include <stdio.h>
#include <math.h>//数学函数库
// double ceil(double )//向上取整函数原型

int BinarySearch(int low, int high, int n, int m) {
 int max, mid, next, sum;
 float midTmp, nextTmp;
 while(low<=high){
  midTmp = ((float)(low+high))/2;
  mid = (int)ceil(midTmp);
  next = mid;
        sum = 0;
  for(int i=0; i<n ;i++) {
   sum += next;
   nextTmp = ((float)next)/2;
   next = (int)ceil(nextTmp);
   if(next==1) {
    sum += (n-i-1);
    break;
   }
  }
  if(sum>m) {
   high = mid;
  } else if(sum<m) {
   low = mid;
  } else if(sum==m) {
   max = mid;
   break;
  }
 }
 return max;
}
// int BinarySearch(int low, int high, int n, int m) {
//  int mid = (int)ceil((low+high)/2);
//  int next = mid, sum = 0, max;
//  for(int i=0; i<n ;i++) {
//   sum += next;
//   next = (int)ceil(next/2);
//  }
//  if(sum>m) {
//   max = BinarySearch(low, mid, n, m);
//  } else if(sum<m) {
//   max = BinarySearch(mid, high, n, m);
//  } else if(sum==m) {
//   max = mid;
//  }
//  return max;
// }
int main() {
 int n,m;
 scanf("%d %d", &n, &m);
 int ceil = m-n+1;
 int res = BinarySearch(1, ceil, n, m);
 printf("%d", res);
 return 0;
}

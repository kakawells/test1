package main

ooeeoeeo
import "fmt"

func findPairs(nums []int, k int) int {
    if len(nums) <= 0 || k < 0 {
        return  0
    }
    pairs := make(map[int]int)
    count := 0
    for i := 0 ; i < len(nums) ; i++ {
        if  v, ok := pairs[nums[i]] ; ok{
            pairs[nums[i]] = v + 1
        }else{
            pairs[nums[i]] = 1
        }
    }

    fmt.Println(pairs)

    for key, value := range pairs {
       if k == 0 {
	  if value >= 2 {
	    count++
          }
       }else{
	  if _, ok := pairs[key + k] ; ok{
	     count++
	  }
       }
    }
    return count
}

func main() {
	k := 0
        nums := []int {1,3,1,5,4}
        result := findPairs(nums, k)
        fmt.Println(result)
}

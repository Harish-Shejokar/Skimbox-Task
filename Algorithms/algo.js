const arr = [3, 2, 1, 4, 6, 5, 7, 9, 8, 10];
//bubble sort

function bubbleSort() {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }
}
// bubbleSort();

// selection sort
function selectionSort() {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) {
      let t = arr[i];
      arr[i] = arr[min];
      arr[min] = t;
    }
  }
}
// selectionSort();



function InsertionSort(){
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}
// InsertionSort();




function MergeSort(arr,start,end) {

  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    MergeSort(arr, start, mid);
    MergeSort(arr, mid + 1, end);
    merge(arr,start,mid,end);
  }
}

function merge(arr, start,mid, end) {
  let temp = [];
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
      temp.push(arr[i]);
      i++;
  }

  while (j <= end) {
    temp.push(arr[j]);
    j++;
  }

  for (let i = start; i <= end; i++) {
    arr[i] = temp.shift();
  }

}
// MergeSort(arr,0,arr.length-1);



// QUICK_SORT >>>>>>>>>>>

function QuickSort(arr, l, h) {
  if (l < h) {
    const pivotElem = findPivot(arr, l, h);
    QuickSort(arr, l, pivotElem);
    QuickSort(arr, pivotElem+1, h);
  }
  
}

function findPivot(arr,l, h) {
  let pivotElem = arr[l];
  let i = l, j = h;
  while (i < j) {
    while (arr[i] <= pivotElem) i++;

    while (arr[j] > pivotElem) j--;

   if(i < j) swap(arr, i, j);
    // console.log(arr);
  }
  swap(arr, j, l);
  return j;
}

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
// QuickSort(arr, 0, arr.length - 1);


console.log("sort \n" , arr);



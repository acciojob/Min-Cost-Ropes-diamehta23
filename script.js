function mincost(arr) {
    // Create a min-heap using a priority queue
    let heap = [...arr].sort((a, b) => a - b);
    let cost = 0;

    while (heap.length > 1) {
        // Remove the two smallest elements
        let first = heap.shift();
        let second = heap.shift();

        let sum = first + second;
        cost += sum;

        // Insert the new combined rope back in sorted order
        heap.push(sum);
        heap.sort((a, b) => a - b);
    }

    return cost;
}

// Example Test Cases
console.log(mincost([4, 3, 2, 6]));      // Output: 29
console.log(mincost([1, 2, 3, 4, 5]));   // Output: 33

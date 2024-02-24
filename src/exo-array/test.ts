import { createMyArray } from "./createMyArray";
import { assert } from "tsafe"


{

    const myArray= createMyArray(3,2,4,1)

    const got = myArray.findSmallerElement();

    const expected = {
        "smallerElementNumber": 1,
        "index": 3
    };

    assert(got.smallestNumber === expected.smallerElementNumber, "Fail ❌");
    assert(got.index === expected.index, "Fail ❌");

    console.log("Pass ✅")

}

{

    const myArray = createMyArray(3, 1, 4, 2)

    const got = myArray.findSmallerElement();

    const expected = {
        "smallerElementNumber": 1,
        "index": 1
    };

    assert(got.smallestNumber === expected.smallerElementNumber, "Fail ❌");
    assert(got.index === expected.index, "Fail ❌");

    console.log("Pass ✅")

}

{

    const myArray = createMyArray(100_000)

    const got = myArray.findSmallerElement();

    const expected = {
        "smallerElementNumber": 100_000,
        "index": 0
    };

    assert(got.smallestNumber === expected.smallerElementNumber, "Fail ❌");
    assert(got.index === expected.index, "Fail ❌");

    console.log("Pass ✅")

}

{

    const myArray= createMyArray(3,2,4,1)

    myArray.sort();

    const got = myArray.toString();

    const expected = createMyArray(1,2,3,4).toString();

    assert(got === expected, `Fail ❌ got: ${got}, expected: ${expected}`);

    console.log("Pass ✅")

}

{

    const myArray= createMyArray(3,2,4,1)

    const newArr = createMyArray<number>()

    myArray.forEach((element) => {newArr.myPush(element + 1)})

    const got = newArr.toString();

    const expected = createMyArray(4,3,5,2).toString()

    assert(got === expected, "Fail ❌");

    console.log("Pass ✅")

}

{
    const myArray= createMyArray(3,2,4,1)
    const newArr: number[] = []
    myArray.forEach((element) => {newArr.push(element + 1)})
    console.log(newArr)

}
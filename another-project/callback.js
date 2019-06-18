

const add = (a, b, sum) => {
      setTimeout(() => {
            const result = a + b;
            sum(result);

      }, 2000);
};

add(1, 4, (sum) => {
      console.log(`After 2 seconds: ${sum}`);
});

function print() {
      console.log("Let's see first result");
};

print();


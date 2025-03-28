

<div class="title">

# Introduction to Rust

### A gentle exploration of the language

![](media/rust-logo-blk.svg)

</div>

-----------------

# Who's this guy?

<div style="float: left; padding-right: 1em; width: 25%">

![](media/Sylvain-Wallez-sq-1024.jpg)

</div>
<div style="margin-left: 25%">

### Sylvain Wallez - @bluxte

### Principal engineer - Elastic

Previously tech lead, CTO, architect, trainer, developer...
...at OVH, Actoboard, Sigfox, Scoop.it, Joost, Anyware

Member of the Apache Software Foundation since 2003

</div>

<center class="clear">

<img src="media/logo-elastic.svg" style="height: 2em;"><br>We're hiring!

</center>

-----------------

# On the menu

- Where does Rust come from?
- Basics: functions, structures, methods
- Controlled mutability
- Ad hoc polymorphism with traits
- Memory management
- Controlled concurrency

----------------

# Rust

"Empowering everyone to build reliable and efficient software"

* Performance: blazingly fast and memory efficient.
* Reliability: rich type system & ownership model guarantee memory safety & thread safety.
* Productivity: great documentation, friendly compiler, awesome tooling.

<center>

![](media/ferris.gif)

</center>

----------------

## Learning Rust

<div style="float: left; width: 40%;">

![](media/book-oreilly-2.jpg)

</div>

<div style="float: right; width: 40%; text-align: center">

![](media/book-nostarch.png)

<small> Online at https://www.rust-lang.org/ </small>

</div>
<div style="clear: both"></div>

----------------

## Rust History

* Started in 2006 at Mozilla, first announced in 2010
  * Primary goals: a fast and secure language
  * Parts of Firefox are written in Rust

* First stable release in 2015
  * New releases every 6 weeks, “edition 2021” released in Oct '21

* Who uses it?
  * AWS: Firecracker powers Lambda and Fargate
  * Google: parts of the Fuschia operating system
  * Linux: 2nd official language for the Kernel!
  * CloudFlare: quic / http 3 implementation
  * Dropbox: file storage
  * Clever Cloud: reverse proxy
  * Atlassian, Canonical, Coursera, Chef, Deliveroo, NPM, Sentry…
  * Growing ecosystem for embedded development

-----------------

## The Rust ecosystem

<div style="float: left; width: 47%;">

![](media/crates-io-2.jpg)

</div>

<div style="float: right; width: 47%">

**crates.io – there’s a crate for that!**

Twitter: @rustlang, @ThisWeekInRust
https://users.rust-lang.org
https://exercism.io/

http://www.arewewebyet.org/
http://arewegameyet.com/
https://areweideyet.com/
http://www.arewelearningyet.com/
https://docs.rust-embedded.org/

</div>
<div style="clear: both"></div>

--------------

# Getting started: rustup & cargo

## Rustup: the Rust toolchain manager

Manage versions, target OS and architectures

`curl https://sh.rustup.rs -sSf | sh` or download from https://rustup.rs/

`rustup doc --std` -- browse the docs locally!

## Cargo: the Rust build system

```
cargo new --bin rust_intro
cargo run
```

```
.
├── Cargo.toml
└── src
    └── main.rs
```
---------------

# Hello, Rust!

[`[source]`](https://stevedonovan.github.io/rust-gentle-intro/1-basics.html#hello-world)

Cargo.toml

```toml
[package]
name = "rust_intro"
version = "0.1.0"
authors = ["Sylvain Wallez <sylvain@bluxte.net>"]
edition = "2018"

[dependencies]
```

main.rs

```rust,editable
fn main() {
    println!("Hello, world!");
}
```

---------------

# Language basics


---------------

## Variables & type inference

&nbsp;

```rust,editable
fn main() {
    let answer = 42;

    println!("Hello {}", answer);

    assert_eq!(answer,42);
}
```
---------------

## Control structures

[`[source]`](https://stevedonovan.github.io/rust-gentle-intro/1-basics.html#looping-and-ifing)
&nbsp;

```rust,editable
fn main() {
    for i in 0..5 {
        if i % 2 == 0 {
            println!("{} is even", i);
        } else {
            println!("{} is odd", i);
        }
    }
}
```

---------------

## If as an expression

&nbsp;

```rust,editable
fn main() {
    for i in 0..5 {
        let even_odd = if i % 2 == 0 {"even"} else {"odd"};
        println!("{} is {}", i, even_odd);
    }
}
```

---------------

## Function declaration

Parameters and return types must be explicit

```rust,editable
fn is_even(i: i32) -> bool {
    i % 2 == 0
}

fn main() {
    for i in 0..5 {
        let even_odd = if is_even(i) {"even"} else {"odd"};
        println!("{} is {}", i, even_odd);
    }
}
```

---------------

## Immutability by default

[`[source]`](https://stevedonovan.github.io/rust-gentle-intro/1-basics.html#adding-things-up)
&nbsp;

```rust,editable
fn main() {
    let sum = 0;
    for i in 0..5 {
        sum += i;
    }
    println!("sum is {}", sum);
}
```

---------------

## No automatic type coercion

[`[source]`](https://stevedonovan.github.io/rust-gentle-intro/1-basics.html#adding-things-up)
&nbsp;

```rust,editable
fn main() {
    let sum = 0.0;
    for i in 0..5 {
        sum += i;
    }
    println!("sum is {}", sum);
}
```

---------------

## Functional iteration/Fluent APIs

&nbsp;

```rust,editable
fn is_even(i: i32) -> bool {
    i % 2 == 0
}

fn main() {
    let sum: i32 =
        (0..5)                   // this is an iterator
        .filter(|i| is_even(*i)) // filter with a closure
        .sum();                  // consume the iterator

    println!("sum of even numbers is {}", sum);
}
```

---------------

## Passing values by reference

&nbsp;

```rust,editable
fn is_even(i: &i32) -> bool {
    i % 2 == 0
}

fn main() {
    let sum: i32 =
        (0..5)                   // this is an iterator
        .filter(|i| is_even(i))  // filter with a closure
        .sum();                  // consume the iterator

    println!("sum of even numbers is {}", sum);
}
```

---------------

## Mutable function parameters

&nbsp;

```rust,editable
fn modifies(x: &mut f64) {
    *x = 1.0;
}

fn main() {
    let mut result = 0.0;
    modifies(&mut result);
    println!("result is {}", result);
}
```

---------------

<div class="title">

# Container types

</div>

- Arrays and Slices
- Vectors and Maps
- Enums and Structs

---------------

# Arrays

[`[source]`](https://stevedonovan.github.io/rust-gentle-intro/1-basics.html#arrays-and-slices)
&nbsp;

```rust,editable
fn main() {
    let arr = [10, 20, 30, 40];
    let first = arr[0];
    println!("first {}", first);

    for i in 0..4 {
        println!("[{}] = {}", i, arr[i]);
    }
    println!("length {}", arr.len());

    println!("five? {}", arr[4]); // guaranteed error
}
```

---------------

## Array types

&nbsp;

```rust,editable
fn main() {
    let arr = [10, 20, 30, 40];
    let mut arrsmall = [1, 2, 3];
    arrsmall = arr;

    takes_array(arr);
    takes_array(arrsmall);
}

fn takes_array(a: [i32; 4]) -> i32 {
    a[0]
}
```

---------------

# Borrowing

&nbsp;

```rust,editable
// read as: slice of i32
fn sum(values: &[i32]) -> i32 {
    let mut res = 0;
    for i in 0..values.len() { // it knows its len
        res += values[i]
    }
    res
}

fn main() {
    let arr = [10, 20, 30, 40];
    // look at that & -- pronounce this as 'borrow arr' or 'ref arr'
    let res = sum(&arr);
    println!("sum {}", res);
}
```

<br/>
<details><summary>commentary</summary>
Ignore the code of sum for a while, and look at &[i32]. The relationship between
Rust arrays and slices is similar to that between C arrays and pointers, except
for two important differences - Rust slices keep track of their size (and will
panic if you try to access outside that size) and you have to explicitly say
that you want to pass an array as a slice using the & operator.

A C programmer pronounces & as 'address of'; a Rust programmer pronounces it
'borrow'. This is going to be the key word when learning Rust. Borrowing is the
name given to a common pattern in programming; whenever you pass something by
reference (as nearly always happens in dynamic languages) or pass a pointer in
C. Anything borrowed remains owned by the original owner.
</details>

---------------

## Aside: Debug Printing Containers

[`[source]`](https://stevedonovan.github.io/rust-gentle-intro/1-basics.html#slicing-and-dicing)
&nbsp;

Print substitution has multiple options, the default is `{}` but you can add a
specifier after a `:` -- `{:?}` uses the `Debug` format instead of the default
`Display` format, which works for slices and generally should work for
everything:

```rust,editable
fn main() {
    let ints = [1, 2, 3];
    let floats = [1.1, 2.1, 3.1];
    let strings = ["hello", "world"];
    let ints_ints = [[1, 2], [10, 20]];

    println!("ints {:?}", ints);
    println!("ints inline {ints:?}");
    println!("floats {floats:?}");
    println!("strings {strings:?}");
    // dbg! prints the contents to stderr and returns it, can be inserted anywhere
    // ... doesn't show up here though because it goes to stderr
    println!("ints_ints {:?}", dbg!(ints_ints));
}
```

---------------

## Sub-slices

&nbsp;

```rust,editable
fn main() {
    let ints = [1, 2, 3, 4, 5];
    let slice1 = &ints[0..2];
    let slice2 = &ints[1..];  // open range!
    let slice3 = &ints[2..=4];  // inclusive range!

    println!("ints {:?}", ints);
    println!("slice1 {:?}", slice1);
    println!("slice2 {:?}", slice2);
    println!("slice3 {:?}", slice3);
}
```

---------------

## Different kinds of pointers

[`Box`](https://doc.rust-lang.org/std/boxed/struct.Box.html) is how you spell
"safe pointer to the heap" in Rust.
&nbsp;

```rust,editable
fn slice_it(slc: &[u32], until: usize) -> &[u32] {
    &slc[..until]
}

fn main() {
    let arr = &[1, 2, 3, 4, 5];
    let ary = Box::new([1, 2, 3, 4, 5]);

    println!("subslice: {:?}", slice_it(arr, 3));
    println!("subslice: {:?}", slice_it(&*ary, 3));
}
```

---------------

## The types of Box

Rust uses angle brackets (`<...>`) to denote generics. A `Box` can hold
anything, so the full definition of the box type looks like `Box<T>`.
&nbsp;

```rust,editable,no_run
// conceptual implementation only, real code is more complex
struct Box<T> {
    val: *const T, // raw pointer to something of type T
}
```

```rust,editable
fn main() {
    // all of these type requirements will work
    let _ = Box::new([1, 2, 3, 4, 5]);
    let _: Box<_> = Box::new([1, 2, 3, 4, 5]);
    let _: Box<[u32]> = Box::new([1, 2, 3, 4, 5]);
    // This will error, but it's a neat trick to reveal the type of a value
    // let _: () = Box::new([1, 2, 3, 4, 5]);
}
```

---------------

## Ignoring the kind of pointer a value is behind

&nbsp;

```rust,editable
fn slice_it(slc: &[u32], until: usize) -> &[u32] {
    &slc[..until]
}

fn take_it(slc: Box<[u32]>, until: usize) -> Box<[u32]> {
    Box::from(&slc[..until])
}

fn main() {
    let arr = [1, 2, 3, 4, 5];
    let ary = Box::new([1, 2, 3, 4, 5]);

    println!("subslice: {:?}", slice_it(&arr, 3));
    println!("subslice: {:?}", slice_it(&*ary, 3));
    println!("subslice: {:?}", take_it(ary, 3));
    println!("original: {:?}", ary);
}
```

---------------

# Structs

&nbsp;

```rust,editable
struct Person {
    name: String,
    age: u16,
}

fn main() {
    let p = Person {
        name: "Ariel Blue".to_string(),
        age: 30,
    };
    println!("This is {}, who is {} years old", p.name, p.age);
}
```

---------------

## Struct implementation

&nbsp;

```rust,editable
struct Person {
    name: String,
    age: u16,
}

impl Person {
    fn new(name: &str, age: u16) -> Person {
        Person {
            name: name.to_string(),
            age,
        }
    }
}

fn main() {
    let p = Person::new("Ariel Blue", 30);
    println!("This is {}, who is {} years old", p.name, p.age);
}
```

(`String` are objects, `&str` are string slices)

---------------

## Struct methods

&nbsp;

There is no implicit access to fields on the struct from methods, you must
explicitly ask for `self`:

```rust,editable
struct Person {
    name: String,
    age: u16,
}

impl Person {
    fn new(name: String, age: u16) -> Person {
        Person { name, age }
    }

    fn introduction(&self) -> String {
        format!("This is {}, who is {} years old", self.name, self.age)
    }
}

fn main() {
    let p = Person::new("Ariel Blue".to_string(), 30);
    println!("introduction: {}", p.introduction());
}
```

---------------

## Making your structs debug-printable

&nbsp;

Rust annotations look like `#[...]`:

```rust,editable
#[derive(Debug)] // <-- automatically implement Debug formatting
struct Person {
    name: String,
    age: u16,
}

impl Person {
    fn new(name: String, age: u16) -> Person {
        Person { name, age }
    }
}

fn main() {
    let p = Person::new("Ariel Blue".to_string(), 30);
    println!("debug: {p:?}");
}
```

---------------

## Variations of `self`

```rust,editable
#[derive(Debug)]
struct Person {
    name: String,
    age: u16,
}

impl Person {
    fn new(name: String, age: u16) -> Person {
        Person { name, age }
    }

    fn introduction(&self) -> String {
        format!("This is {}, who is {} years old", self.name, self.age)
    }

    fn set_name(&mut self, name: &str) {
        self.name = name.to_string();
    }

    fn take_name(self) -> String {
        self.name
    }
}

fn main() {
    let mut p = Person::new("Ariel Blue".to_string(), 30);
    println!("{:?}", p);

    p.set_name("Ariel Green");
    println!("{:?}", p);

    println!("I own the name: {:?}", p.take_name());

    // p has now moved, below will fail to compile
    // println!("{:?}", p);
}
```

---------------

## Variations of self summary

* no `self` argument: associated functions, aka static functions, like the `new` "constructor"
* `&self` argument: can use the values of the struct, but not change them
* `&mut self` argument: can modify the values
* `self` argument: will consume the value, which will move

---------------

# Enums

&nbsp;

```rust,editable
#[derive(Debug)]
pub enum StringOrInt {
    Str(String),
    Int(i64),
    Nope,
}

fn main() {
    let is_int = StringOrInt::Int(1);
    let is_neither = StringOrInt::Nope;

    println!("what I got: {is_int:?}, maybe I got it: {is_neither:?}")
}
```

---------------

## Some, None? The Option enum

[`[docs]`](https://doc.rust-lang.org/std/option/)
&nbsp;

```rust,no_run
pub enum Option<T> {
    None,
    Some(T),
}
```

---------------

## Pattern matching: match

`Option` [has lots of useful inherent methods](https://doc.rust-lang.org/std/option/).
&nbsp;

```rust,editable
pub enum Opt<T> {
    None,
    Some(T),
}

impl<T> Opt<T> {
    fn is_some(&self) -> bool {
        match self {
            Opt::Some(_) => true,
            Opt::None => false,
        }
    }
}

fn main() {
    let o = Opt::Some(1);
    let n: Opt<()> = Opt::None;

    println!("my opts: o => {} n => {}", o.is_some(), n.is_some());
}
```

---------------

## Pattern matching: destructuring assigment

&nbsp;

```rust,editable
fn main() {
    let v = Option::Some("wow");

    if let Some(value) = v {
        println!("Value is {}", value);
    }
}
```

---------------

## More pattern matching

&nbsp;

```rust,editable
fn main() {
    let n = 0;
    let text = match n {
        0 => "zero",
        1 => "one",
        2 => "two",
        _ => "many",
    };

    println!("{} is {}", n, text);
}
```


---------------

# Vectors

Vectors are growable arrays.
&nbsp;

```rust,editable
fn main() {
    let mut v = Vec::new();
    v.push(10);
    v.push(20);
    v.push(30);

    let first = v[0];

    println!("v is {:?}", v);
    println!("first is {}", first);
}
```

---------------

## Safe access

&nbsp;

```rust,editable
fn main() {
    let v = vec![10, 20, 30]; // initialization macro
    let idx = 0;

    match v.get(idx) {
        Some(value) => println!("Value is {}", value),
        None => println!("No value..."),
    }
}
```

---------------

## Vector pseudo implementation

Honestly this is too complex for this stage, and yet doing this for real is
[even more work](https://doc.rust-lang.org/nomicon/vec/vec.html).
&nbsp;

```rust,editable
#[derive(Debug)]
struct MyVec<T> {
    inner: Box<[T]>,
    size: usize,
    capacity: usize,
}

impl<T> MyVec<T> {
    fn new() -> MyVec<T> { MyVec { inner: Box::from([]), size: 0, capacity: 0 } }

    fn push(&mut self, val: T)
        where T: Default + Clone // this is so that we can cheat
    {
        if self.size == self.capacity {
            let new_cap = (self.capacity + 1) * 2;
            let mut new_inner: Box<[T]> = vec![T::default(); new_cap].into_boxed_slice();
            let mut old_inner: Box<[T]> = Box::from([]);
            std::mem::swap(&mut self.inner, &mut old_inner);
            for (i, v) in old_inner.into_iter().enumerate() {
                new_inner[i] = v;
            }
            std::mem::swap(&mut self.inner, &mut new_inner);
            self.capacity = new_cap;
        }
        self.inner[self.size] = val;
        self.size += 1;
    }

    fn get(&self, idx: usize) -> Option<&T> {
        if idx < self.size {
            Some(&self.inner[idx])
        } else {
            None
        }
    }
}

fn main() {
    let mut v = MyVec::new();
    v.push(10);
    v.push(20);
    v.push(30);

    let first = v.get(0);
    let nope = v.get(4);

    println!("v is {:?}", v);
    println!("first is {:?}", first);
    println!("nope is {:?}", nope);
}
```

---------------

# Tuples

&nbsp;

```rust,editable
fn add_mul(x: f64, y: f64) -> (f64, f64) {
    (x + y, x * y)
}

fn main() {
    let t = add_mul(2.0, 10.0);

    println!("tuple is {:?}", t);

    println!("add {} mul {}", t.0, t.1);

    let (add, mul) = t;
    println!("add {} mul {}", add, mul);
}
```

---------------

# Algebraic Data Types (ADTs)

The "Algebraic" in ADTs refers to being able to represent any algebraic
combination of types in the type system.


```rust,editable
struct Multiplication {
    name: String,
    age: u8,
}

enum Addition {
    One,
    Two,
}

enum Polynomial {
    Addable(Addition),
    Mult(Multiplication),
    Combined(Addition, Multiplication),
}

# fn main() {}
```

The `Multiplication` type here represents a type that can have all the values
that `String` can have, and all the values that `u8` can have, so its notation
in the type algebra is `String * u8` (string times u8).

Really, people just say ADTs when a language supports value-carrying enums.

---------------

<div class="title">

# Ownership and borrows

### There can be only one owner

</div>

---------------

# There can be only one owner

```rust,editable
#[derive(Debug)]
struct Person { name: String }

impl Person {
    fn new(name: &str) -> Person {
        Person { name: name.to_string() }
    }
}

fn take_ownership(p: Person) {
    println!("{} is mine", p.name);
}

fn borrow_it(p: &Person) {
    println!("I'm giving {} back to you!", p.name);
}

fn main() {
    let p = Person::new("Adrien");
    println!("{:?}", p);

    // let x = p;  // moving p will break the code below
    // println!("{:?}", x);

    borrow_it(&p);
    println!("{:?}", p);

    take_ownership(p);
    // println!("{:?}", p); // will fail
}
```

---------------

<div class="title">

# Traits

### Type classes & ad-hoc polymorphism

</div>


---------------

# Extending existing types

```rust,editable
trait Show {
    fn show(&self) -> String;
}

impl Show for i32 {
    fn show(&self) -> String {
        format!("a four-byte signed {}", self)
    }
}

impl Show for f64 {
    fn show(&self) -> String {
        format!("an eight-byte float {}", self)
    }
}

fn main() {
    let answer = 42;
    let pi = 3.14;
    println!("Here is {}", answer.show());
    println!("Here is {}", pi.show());
}
```

Sweet, we've added new methods to `i32` and `f64`!

---------------

# Adding type constraints

```rust,editable
trait Show {
    fn show(&self) -> String;
}

impl Show for i32 {
    fn show(&self) -> String {
        format!("a four-byte signed {}", self)
    }
}

impl<T> Show for Option<T> where T: Show {
    fn show(&self) -> String {
        match self {
            Some(v) => v.show(),
            None => format!("nothing"),
        }
    }
}

fn main() {
    let answer = Some(42);
    let void: Option<i32> = None;
    println!("Here is {}", answer.show());
    println!("Here is {}", void.show());
}
```

---------------

# Box: dynamic allocation

```rust,editable
#[derive(Debug)]
struct Node {
    value: String,
    left: Option<Box<Node>>,
    right: Option<Box<Node>>,
}

impl Node {
    fn new(s: &str) -> Node {
        Node{value: s.to_string(), left: None, right: None}
    }

    fn set_left(&mut self, node: Node) {
        self.left = Some(Box::new(node));
    }

    fn set_right(&mut self, node: Node) {
        self.right = Some(Box::new(node));
    }
}


fn main() {
    let mut root = Node::new("root");
    root.set_left(Node::new("left"));
    root.set_right(Node::new("right"));

    println!("{:#?}", root);
}
```

---------------

# A generic sorted tree

```rust,editable
#[derive(Debug)]
struct Node<T> {
    value: T,
    left: Option<Box<Node<T>>>,
    right: Option<Box<Node<T>>>,
}

impl<T: Ord> Node<T> {
    fn new(v: T) -> Node<T> {
        Node{value: v, left: None, right: None}
    }

    fn set_left(&mut self, node: Node<T>) {
        self.left = Some(Box::new(node));
    }

    fn set_right(&mut self, node: Node<T>) {
        self.right = Some(Box::new(node));
    }

    fn insert(&mut self, data: T) {
        if data < self.value {       // <-- Ord is used here
            match self.left {
                Some(ref mut n) => n.insert(data),
                None => self.set_left(Self::new(data)),
            }
        } else {
            match self.right {
                Some(ref mut n) => n.insert(data),
                None => self.set_right(Self::new(data)),
            }
        }
    }
}

fn main() {
    let mut root = Node::new("root".to_string());
    root.insert("one".to_string());
    root.insert("two".to_string());
    root.insert("four".to_string());

    println!("{:#?}", root);
}
```

---------------

<div class="title">

# Automatic memory reclamation

**Memory leaks, resource leaks? Gone!**

</div>

---------------

# Automatic memory reclamation

`Box::new(node)` allocates on the heap and `node` is _moved_ inside the box. Ownership of the box can move, but you
can only get a reference to its content.

The memory is automatically freed when the box has no more owner (it is "dropped").

```rust,editable
struct DropTracer(i32);

impl Drop for DropTracer {
    fn drop(&mut self) {
        println!("Dropping {}", self.0);
    }
}

fn main() {
    let a = DropTracer(0);
    println!("a contains {}", a.0);

    let mut b = Box::new(DropTracer(1));
    println!("b contains {}", b.0);

    println!("Replacing b");
    b = Box::new(DropTracer(2));
    println!("b contains {}", b.0);

    println!("Exiting");
}
```

---------------

# Automatic file closing

Ownership and lifetimes will automatically close files.

```rust,editable
use std::fs::File;
use std::path::Path;
use std::io::Read;

fn read_file() -> String {
    let mut text = String::new();
    let path = Path::new("file.txt");

    let mut file = File::open(path).unwrap();
    file.read_to_string(&mut text).unwrap();

    return text;
}

fn main() {
    let str = read_file();
    println!("Text is {}", str);
}
```

---------------

<div class="title">

# Error handling

</div>

---------------

# The `Error` type

```rust
pub enum Result<T, E> {
    /// Contains the success value
    Ok(T),
    /// Contains the error value
    Err(E),
}
```

Reading a file with proper error handling:

```rust,editable
use std::fs::File;
use std::path::Path;
use std::io::Read;

fn read_file() -> Result<String, std::io::Error> {
    let mut text = String::new();
    let path = Path::new("file.txt");

    let mut file = File::open(path)?;
    file.read_to_string(&mut text)?;

    return Ok(text);
}

fn main() -> Result<(), std::io::Error>{
    let str = read_file()?;
    println!("Text is {}", str);
    Ok(())
}
```

---------------------

# There's a lot more to talk about...

* shared references with reference counting
* multithreading and the `Sync` and `Send` traits
* `Mutex` and `RwLock` from the standard library
* async programming
* interior mutability
* etc...

Compared to other languages, Rust is simple but has non conventional features that are its strength.

If you want to use it, take the time to _learn_ it. Ferris will thank you :-)

---------------------

<div class="title">

# Thanks!

![](media/ferris.gif)

&nbsp;
&nbsp;

Presentation contents inspired by [https://stevedonovan.github.io/rust-gentle-intro/](https://stevedonovan.github.io/rust-gentle-intro/)<br>
Sources available at [https://github.com/swallez/introduction-to-rust](https://github.com/swallez/introduction-to-rust)
</div>

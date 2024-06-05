// not my code
// used from simondevyoutube on Flocking Simulation
// Copyright (c) 2020 simondevyoutube
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

export const math = (function() {
    return {
      rand_range: function (a, b) {
        return Math.random() * (b - a) + a;
      },
  
      rand_normalish: function () {
        const r = Math.random() + Math.random() + Math.random() + Math.random();
        return (r / 4.0) * 2.0 - 1;
      },
  
      lerp: function (x, a, b) {
        return x * (b - a) + a;
      },
  
      clamp: function (x, a, b) {
        return Math.min(Math.max(x, a), b);
      },
  
      sat: function (x) {
        return Math.min(Math.max(x, 0.0), 1.0);
      },
    };
  })();
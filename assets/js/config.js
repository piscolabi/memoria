(function() {
    window.x7kR9p = {
      d3vL8: [
        "7e4b64eb65969fa3927a9c40287389587df59b8e5c8a9cc6e586f24a5e4fd550",
        "5a42d4398d5784d961812ea1a250b5f0e2b2a6b9c8d3f6e7a1b2c3d4e5f6a7b8",
        "e4c9f5a6b1d2c3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8",
        "ed8b94f8342095e0a5d25b3c9bc27c995fcd4b9a3671d3e60cdec38568add823",
        "1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2",
        "eccb96ff6729f24d8a969ec3e649e94b1d03d4710e59ecdb8ff68d154d80c4bb",
        "ccb84b35014efab70d988d95303252715d75b51ce059d18e1a39816a1ec27fb7",
        "a4b4186b8f6d6877f20b1788116b88701ffb4ec31a5bc743b48ba1f4a08e2e23"
      ],
      t9jM2: "xK9bR7tP3mN5vQ1sL0zJ2yH8gF4dC6eA",
      f5qN8: {
        z3xW7: 17,
        f5xS2: 3,
        g2vP6: 64,
        k1yT4: 7
      },
      q8bZ3: async function(p7dK2) {
        try {
          const j6fH9 = await this.n4sL5(p7dK2);
          const m1tR7 = this.d3vL8[this.f5qN8.f5xS2];
          return j6fH9 === m1tR7;
        } catch (c8gB3) {
          console.error("Erro no proceso:", c8gB3);
          return false;
        }
      },
      n4sL5: async function(y5hJ7) {
        const r2vF8 = y5hJ7 + this.t9jM2;
        const a3dE9 = new TextEncoder();
        const w6kL2 = a3dE9.encode(r2vF8);
        const u9pM4 = await crypto.subtle.digest('SHA-256', w6kL2);
        return Array.from(new Uint8Array(u9pM4))
          .map(b => b.toString(16).padStart(2, '0'))
          .join('');
      }
    };
  })();
(function() {
    const _0xf4e8 = [
        'R2FsZWdvUmVwb3NpdG9yaW8yMDI1',
        '==QZtFmb', 'vd2bQBCf', 'kRWYsN2c', 'hBCZpVmb', 'pxWY2JXZ',
        '5dc7a', '85b2c9', '4e1f3b', '2d6a08',
        'zJXZ39Gd', 'jF2czVmcj', 'NHel5WZ',
        'd78c98d6aa0392bc48b101a9525a469f20ec4f764dccd928e2ca325bc21a5b0',
        '9cb3', '67f1d', 'e02a5'
    ];
    
    const _0xc7a9 = new Date().getDate() + 7;
    
    async function _0xe3d5(_0x4f2a) {
        try {
            const _0x5b7c = atob(_0xf4e8[0]);
            
            let _0x2d8e = _0x4f2a;
            
            _0x2d8e = _0x5b7c + ":" + _0x2d8e + ":" + _0x5b7c.split('').reverse().join('');
            
            const _0x9d3f = new TextEncoder();
            let _0x7e2c = await crypto.subtle.digest('SHA-256', _0x9d3f.encode(_0x2d8e));
            
            for (let _0xa1b4 = 0; _0xa1b4 < _0xc7a9; _0xa1b4++) {
                const _0x6c8d = new Uint8Array([
                    ...new Uint8Array(_0x7e2c),
                    ..._0x9d3f.encode(_0x5b7c + _0xa1b4.toString())
                ]);
                _0x7e2c = await crypto.subtle.digest('SHA-256', _0x6c8d);
            }
            
            const _0x8f4d = Array.from(new Uint8Array(_0x7e2c));
            return _0x8f4d.map(_0xb3e7 => _0xb3e7.toString(16).padStart(2, '0')).join('');
            
        } catch (_0x1d9e) {
            console.error('Erro na transformación', _0x1d9e);
            return _0xb2f7(_0x4f2a);
        }
    }
    
    async function _0xb2f7(_0x4f2a) {
        const _0x9d3f = new TextEncoder().encode(_0x4f2a);
        const _0x7e2c = await crypto.subtle.digest('SHA-256', _0x9d3f);
        const _0x8f4d = Array.from(new Uint8Array(_0x7e2c));
        return _0x8f4d.map(_0xb3e7 => _0xb3e7.toString(16).padStart(2, '0')).join('');
    }
    
    async function _0xd1a3(_0x4f2a) {
        const _0x3c8e = [
            '5b590bf62b', 'f448df1f27', '10d2456396', '80fe2a946a', 
            '979d576e09', 'e86f2c2908', '8d07'
        ];
        
        const _0x7f2b = _0x3c8e.join('');
        
        const _0x6d4e = await _0xe3d5(_0x4f2a);
        
        let _0x9c5a = 0;
        for (let _0xa1b4 = 0; _0xa1b4 < _0x7f2b.length; _0xa1b4++) {
            _0x9c5a |= (_0x6d4e.charCodeAt(_0xa1b4) ^ _0x7f2b.charCodeAt(_0xa1b4));
        }
        
        return _0x9c5a === 0;
    }
    
    function _0xa7c6() {
        if (sessionStorage.getItem('siteAuthenticated') !== 'true') {
            document.addEventListener('DOMContentLoaded', function() {
                const _0x2e9f = document.getElementById('site-content');
                if (_0x2e9f) {
                    _0x2e9f.style.display = 'none';
                }
                
                const _0x3b8d = document.createElement('div');
                
                if (window.AUTH_TEMPLATE) {
                    _0x3b8d.innerHTML = window.AUTH_TEMPLATE;
                } else {
                    console.error("Erro: Template non dispoñible");
                    return;
                }
                
                document.body.appendChild(_0x3b8d);
                
                setTimeout(() => {
                    const _0x5c7d = document.getElementById('password-input');
                    if (_0x5c7d) {
                        _0x5c7d.focus();
                    }
                }, 100);
                
                const _0x8e2f = document.getElementById('submit-button');
                const _0x5c7d = document.getElementById('password-input');
                
                if (_0x8e2f) {
                    _0x8e2f.addEventListener('click', _0xf9e3);
                }
                
                if (_0x5c7d) {
                    _0x5c7d.addEventListener('keypress', function(_0x7d2e) {
                        if (_0x7d2e.key === 'Enter') {
                            _0xf9e3();
                        }
                    });
                }
                
                async function _0xf9e3() {
                    const _0x5c7d = document.getElementById('password-input');
                    if (!_0x5c7d) return;
                    
                    const _0x4e8d = _0x5c7d.value;
                    
                    try {
                        const _0x2c9f = await _0xd1a3(_0x4e8d);
                        
                        if (_0x2c9f) {
                            sessionStorage.setItem('siteAuthenticated', 'true');
                            
                            const _0x7b5f = document.querySelector('.auth-container');
                            if (_0x7b5f && _0x7b5f.parentNode) {
                                _0x7b5f.parentNode.removeChild(_0x7b5f);
                            }
                            
                            if (_0x2e9f) {
                                _0x2e9f.style.display = 'block';
                            }
                        } else {
                            _0x5c7d.value = '';
                            _0x5c7d.style.borderColor = '#DB2777';
                            _0x5c7d.style.boxShadow = '0 0 0 2px rgba(219, 39, 119, 0.2)';
                            _0x5c7d.placeholder = 'Contrasinal incorrecta';
                            
                            _0x5c7d.animate([
                                { transform: 'translateX(-6px)' },
                                { transform: 'translateX(6px)' },
                                { transform: 'translateX(-6px)' },
                                { transform: 'translateX(6px)' },
                                { transform: 'translateX(-3px)' },
                                { transform: 'translateX(3px)' },
                                { transform: 'translateX(0)' }
                            ], {
                                duration: 500,
                                easing: 'ease-in-out'
                            });
                            
                            setTimeout(() => {
                                _0x5c7d.style.borderColor = '';
                                _0x5c7d.style.boxShadow = '';
                                _0x5c7d.placeholder = 'Escriba a contrasinal';
                            }, 2000);
                        }
                    } catch (_0x1d9e) {
                        console.error('Erro ao verificar', _0x1d9e);
                    }
                }
            });
        } else {
            document.addEventListener('DOMContentLoaded', function() {
                const _0x2e9f = document.getElementById('site-content');
                if (_0x2e9f) {
                    _0x2e9f.style.display = 'block';
                }
            });
        }
    }
    
    if (window.authTemplateLoaded) {
        _0xa7c6();
    } else {
        window.addEventListener('load', function _0x4d7e() {
            if (window.authTemplateLoaded) {
                window.removeEventListener('load', _0x4d7e);
                _0xa7c6();
            } else {
                console.error("Erro: template non cargado");
                setTimeout(function() {
                    if (window.authTemplateLoaded) {
                        _0xa7c6();
                    } else {
                        console.error("Erro crítico: template non dispoñible");
                        window.AUTH_TEMPLATE = `
  <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:9999;">
  <div style="background:white;padding:20px;border-radius:10px;text-align:center;max-width:400px;">
    <h2 style="margin-bottom:20px;">Acceso protexido</h2>
    <input id="password-input" type="password" placeholder="Escriba a contrasinal" style="width:100%;padding:10px;margin-bottom:15px;border-radius:4px;border:1px solid #ddd;">
    <button id="submit-button" style="background:#4338CA;color:white;padding:10px 20px;border:none;border-radius:4px;cursor:pointer;">Acceder</button>
  </div>
  </div>`;
                        _0xa7c6();
                    }
                }, 1000);
            }
        });
    }
  })();
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aetheris Core // Box 6: Dart</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background-color: #03020d; color: #ffffff; font-family: system-ui, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 2rem; }
        .header-node { text-align: center; margin-bottom: 3rem; }
        .title-glow { color: #00b4ab; font-size: 2.8rem; font-weight: 900; text-transform: uppercase; text-shadow: 0 0 15px rgba(0, 180, 171, 0.3); }
        .subtitle { color: #8a8ca3; font-size: 1.1rem; margin-top: 0.5rem; }
        .mobile-card { background: #0a0724; border: 2px solid rgba(0, 180, 171, 0.3); border-radius: 24px; padding: 3rem; max-width: 650px; width: 100%; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6); }
        .card-heading { font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem; }
        .description-text { color: #8a8ca3; font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem; }
        .highlight-text { color: #00b4ab; font-weight: 800; }
        .dart-display { background: #020108; border-left: 3px solid #00b4ab; padding: 1.2rem; border-radius: 8px; font-family: 'Courier New', Courier, monospace; font-size: 0.85rem; color: #a0aec0; line-height: 1.5; margin-bottom: 1.5rem; }
        .keyword { color: #ff79c6; }
        .widget { color: #8be9fd; }
        .action-button { width: 100%; background: linear-gradient(135deg, #00b4ab 0%, #00d2c6 100%); color: #000; border: none; padding: 1rem; border-radius: 12px; font-weight: 900; font-size: 1rem; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; }
        .compile-log { margin-top: 1.2rem; background: rgba(0, 180, 171, 0.08); border: 1px dashed #00b4ab; color: #00b4ab; padding: 1rem; border-radius: 8px; font-family: monospace; font-size: 0.85rem; display: none; }
        .footer-node { margin-top: 5rem; color: #515470; font-size: 0.85rem; font-family: monospace; letter-spacing: 1px; text-transform: uppercase; }
    </style>
</head>
<body>
    <div class="header-node">
        <h1 class="title-glow">Aetheris // Box 6</h1>
        <p class="subtitle">Language 6: Dart Cross-Platform Core Engine</p>
    </div>
    <div class="mobile-card">
        <h2 class="card-heading">📱 Unified Mobile Application Render</h2>
        <p class="description-text">
            <span class="highlight-text">[6. Dart]:</span> Powers the cross-platform Flutter application for Android, iOS, and Web [INDEX]. It compiles native instructions to execute search queries seamlessly across all client devices.
        </p>
        <div class="dart-display">
            <span class="keyword">void</span> main() => runApp(<span class="widget">AetherisApp</span>());<br>
            <span class="keyword">class</span> <span class="widget">AetherisApp</span> <span class="keyword">extends</span> StatelessWidget {<br>
            &nbsp;&nbsp;<span class="keyword">Widget</span> build(BuildContext context) => <span class="widget">Container</span>();<br>
            }
        </div>
        <button type="button" class="action-button" onclick="runDartCompile()">Initialize Flutter Canvas 📱</button>
        <div id="dartLog" class="compile-log"></div>
    </div>
    <div class="footer-node">Aetheris Layer System // State: Dart AOT Compilation Ready</div>
    <script>
        function runDartCompile() {
            const log = document.getElementById('dartLog');
            log.style.display = 'block';
            log.innerHTML = `> [Dart VM] Booting compilation channels...<br>> Syncing layout rendering engines across Android, iOS, and Web bounds...<br>✔ SUCCESS: Cross-platform Flutter UI canvas spawned flawlessly!`;
        }
    </script>
</body>
</html>

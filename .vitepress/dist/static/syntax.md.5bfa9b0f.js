import{_ as s,o as a,c as n,S as t}from"./chunks/framework.29284239.js";const e="/xD/static/CREATE.10c39b49.png",o="/xD/static/CALL.f3586e5a.png",p="/xD/static/NEW.569093dd.png",l="/xD/static/RIDE.6b010d95.png",_=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"syntax.md","filePath":"syntax.md"}'),i={name:"syntax.md"},c=t(`<p><strong>CREATE A Function</strong></p><p>Type/Class/Method/Function: are implemented in First Letter Capitalized yet you can use all caps if you want.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">VOID CREATE X()[</span></span>
<span class="line"><span style="color:#A6ACCD;">        DISPLAY[Greeting]</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span></code></pre></div><p><img src="`+e+'" alt="CREATE A TYPE CLASS METHOD OR FUNCTION" title="CREATE"></p><p><strong>Call A Function</strong></p><p>CALL: EXECUTE/USE/GET/SET</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CALL X()</span></span></code></pre></div><p><img src="'+o+'" alt="CALL METHOD" title="CALL"></p><p><strong>CREATE an Instance of a... Class</strong></p><p>NEW: To implement a NEW instance of a class, you must use the NEW keyword. In this example NEW will create a new instance of the &quot;X&quot; class and name it &quot;X2&quot;.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">NEW X2 X()</span></span></code></pre></div><p><img src="'+p+`" alt="NEW INSTANCE" title="NEW"></p><p><strong>RIDE and CREATE an Instance of... Class with Parameters</strong></p><p>You can also use the RIDE keyword to create a new instance of a class that implements the RIDEABLE interface. This will allow you to create a new instance of a class that implements the RIDEABLE interface for overwriting classes a type of INHERITANCE/POLYMORPHISM paradigm.</p><p><em>Convention: Parameters All-Lower case.</em></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">RIDE NEW X2 X(STRING string, INTEGER int)[</span></span>
<span class="line"><span style="color:#A6ACCD;">        DISPLAY[string]</span></span>
<span class="line"><span style="color:#A6ACCD;">        DISPLAY[int] **Convention: Pass variable ARGUMENTS</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span></code></pre></div><p><img src="`+l+`" alt="NEW RIDEABLE INSTANCE" title="RIDE"></p><p><strong>GRAB to ITERARATE through an INDEX</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">GRAB Greeting IN Greetings[</span></span>
<span class="line"><span style="color:#A6ACCD;">       DISPLAY[Greeting]</span></span>
<span class="line"><span style="color:#A6ACCD;">   ]</span></span></code></pre></div><pre><code>#Prints &quot;Hello!&quot;
#Prints &quot;Hey&quot;
#Prints &quot;Hi&quot;
</code></pre>`,20),r=[c];function C(A,E,d,g,m,u){return a(),n("div",null,r)}const h=s(i,[["render",C]]);export{_ as __pageData,h as default};
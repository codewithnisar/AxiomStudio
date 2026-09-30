<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap — Axiom Studio</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin"/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&amp;family=Manrope:wght@500;700;800&amp;family=Space+Grotesk:wght@600;700&amp;display=swap" rel="stylesheet"/>
        <style>
          :root {
            --ink: #0b0c10;
            --paper: #f2eee6;
            --muted: #74757c;
            --line: #d8d3c9;
            --blue: #5367ff;
            --lime: #caff42;
          }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            background: var(--paper);
            color: var(--ink);
            font-family: 'Manrope', sans-serif;
            padding: 40px 20px;
            line-height: 1.6;
          }
          .container {
            max-width: 960px;
            margin: 0 auto;
          }
          .header {
            margin-bottom: 40px;
            padding-bottom: 24px;
            border-bottom: 1px solid var(--line);
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            flex-wrap: wrap;
            gap: 20px;
          }
          .logo {
            font: 700 24px 'Space Grotesk', sans-serif;
            letter-spacing: -0.07em;
            color: var(--ink);
            text-decoration: none;
            display: flex;
            align-items: center;
          }
          .logo i {
            display: inline-block;
            width: 8px;
            height: 8px;
            background: var(--blue);
            border-radius: 50%;
            margin-left: 4px;
          }
          .tag {
            font: 10px 'DM Mono', monospace;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--muted);
            margin-bottom: 6px;
          }
          h1 {
            font: 700 42px 'Space Grotesk', sans-serif;
            letter-spacing: -0.05em;
          }
          p.desc {
            font-size: 14px;
            color: var(--muted);
            margin-top: 8px;
          }
          .btn {
            padding: 12px 20px;
            border-radius: 100px;
            background: var(--ink);
            color: #fff;
            font-size: 12px;
            font-weight: 800;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }
          .table-wrapper {
            background: #fff;
            border-radius: 20px;
            border: 1px solid var(--line);
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0,0,0,0.04);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 13px;
          }
          th {
            background: var(--ink);
            color: #fff;
            padding: 16px 20px;
            font: 700 11px 'DM Mono', monospace;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
          td {
            padding: 16px 20px;
            border-bottom: 1px solid var(--line);
          }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #f9f7f2; }
          a.url-link {
            color: var(--blue);
            font-weight: 700;
            text-decoration: none;
          }
          a.url-link:hover { text-decoration: underline; }
          .pill {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 100px;
            background: rgba(202, 255, 66, 0.3);
            color: var(--ink);
            font: 700 10px 'DM Mono', monospace;
          }
          .footer {
            margin-top: 40px;
            text-align: center;
            font: 11px 'DM Mono', monospace;
            color: var(--muted);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div>
              <a href="index.html" class="logo">AXIOM STUDIO<i></i></a>
              <div class="tag" style="margin-top: 16px;">Sitemap Protocol</div>
              <h1>XML Site Index</h1>
              <p class="desc">This is a human-readable XML sitemap generated for search engine indexing.</p>
            </div>
            <div>
              <a href="index.html" class="btn">Back to Website ↗</a>
            </div>
          </div>

          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>URL Location</th>
                  <th>Last Modified</th>
                  <th>Change Frequency</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a class="url-link" href="{sitemap:loc}" target="_blank">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                    <td>
                      <span class="pill"><xsl:value-of select="sitemap:changefreq"/></span>
                    </td>
                    <td>
                      <strong><xsl:value-of select="sitemap:priority"/></strong>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <div class="footer">
            © 2026 AXIOM STUDIO — ALL RIGHTS RESERVED
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

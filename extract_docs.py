import zipfile
import xml.etree.ElementTree as ET
import os

def extract_text(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as z:
            content = z.read('word/document.xml')
        root = ET.fromstring(content)
        texts = []
        for elem in root.iter():
            if elem.tag.endswith('t'):
                if elem.text:
                    texts.append(elem.text)
        return " ".join(texts)
    except Exception as e:
        return f"Error reading {docx_path}: {e}"

files = [
    "Project Charter.docx",
    "Declaración del equipo del proyecto.docx",
    "Documento inicial del problema (primer borrador).docx",
    "Declaración de la visión del proyecto.docx"
]

path_prefix = "d:/Taller Proyectos 2/planner-UC/docs/inicio/"

with open("extracted_content.txt", "w", encoding="utf-8") as out:
    for f in files:
        full_path = os.path.join(path_prefix, f)
        out.write(f"--- CONTENT OF {f} ---\n")
        out.write(extract_text(full_path))
        out.write("\n\n")

import os
import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    import mammoth
except ImportError:
    print("Instalando dependencia 'mammoth'...")
    install('mammoth')
    import mammoth

def convert_docx_to_md(source_folder, output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
        print(f"Carpeta de salida creada: {output_folder}")

    files = [f for f in os.listdir(source_folder) if f.endswith('.docx')]
    
    if not files:
        print(f"No se encontraron archivos .docx en {source_folder}")
        return

    print(f"Encontrados {len(files)} archivos para convertir.")

    for file_name in files:
        docx_path = os.path.join(source_folder, file_name)
        md_name = os.path.splitext(file_name)[0] + '.md'
        md_path = os.path.join(output_folder, md_name)

        print(f"Convirtiendo: {file_name} -> {md_name}...")
        
        with open(docx_path, "rb") as docx_file:
            # Convertimos a Markdown directamente usando mammoth
            # Mammoth genera un HTML limpio que luego podemos tratar o usar su convertidor nativo
            result = mammoth.convert_to_markdown(docx_file)
            markdown = result.value
            
            with open(md_path, "w", encoding="utf-8") as md_file:
                md_file.write(markdown)
        
        print(f"¡Éxito! Guardado en {md_path}")

if __name__ == "__main__":
    # Configuramos las rutas por defecto para tu proyecto
    SOURCE = r"c:\planner-UC\docs\inicio"
    OUTPUT = r"c:\planner-UC\docs\inicio"
    
    convert_docx_to_md(SOURCE, OUTPUT)
    print("\nProceso finalizado.")

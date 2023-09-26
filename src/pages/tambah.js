import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import * as React from "react";
import { useEffect, useState } from "react";
import Icon from "../images/logopolos.png";
import { FiCheckCircle } from "react-icons/fi";
import Select from "react-select";

export const Tambah = () => {
  const [viewPdf, setViewPdf] = useState(null);
  const [catalogValue, setCatalogValue] = useState("");
  const [serialNumberValue, setSerialNumberValue] = useState("");
  const newplugin = defaultLayoutPlugin();
  const [showModal, setShowModal] = useState(false);
  const [selectedCatalogOption, setSelectedCatalogOption] = useState("");
  const [selectedConditionOption, setSelectedConditionOption] = useState("");
  const [selectedTypeOption, setSelectedTypeOption] = useState("");
  const [selectedBuildingOption, setSelectedBuildingOption] = useState("");
  const [selectedClassOption, setSelectedClassOption] = useState("");
  const [selectedRoomOption, setSelectedRoomOption] = useState("");
  const [selectedRollopackOption, setSelectedRollopackOption] = useState("");
  const [selectedCabinetOption, setSelectedCabinetOption] = useState("");

  const handleModalOpen = () => {
    // Close the modal when needed
    setShowModal(true);
  };
  const handleModalClose = () => {
    // Close the modal when needed
    setShowModal(false);
  };

  const handleChangePdf = (e) => {
    document.getElementById("pdf-viewer").classList.remove("d-none");
    let selectedFile = e.target.files[0];
    console.log(selectedFile.size);
    if (selectedFile) {
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = (e) => {
        setViewPdf(e.target.result);
      };
    } else {
      setViewPdf(null);
    }
  };

  useEffect(() => {
    document.getElementById("tambah").classList.add("act");
    document.getElementById("tambah").classList.remove("text-white");
  }, []);

  useEffect(() => {
    generateArchiveCode();
  }, [catalogValue, serialNumberValue]);

  function generateArchiveCode() {
    const archiveCode = `${catalogValue}/${serialNumberValue}`;
    const archiveCodeElement = document.getElementById("archive_code");
    if (archiveCodeElement) {
      archiveCodeElement.textContent = `${archiveCode}`;
      console.log("Archive Code:", archiveCode);
    }
  }
  const selectCatalogOptions = [
    { value: "", label: "Pilih no indeks katalog" },
    { value: "1", label: "1. Doktrin" },
    { value: "2", label: "2. Organisasi dan Prosedur" },
    { value: "3", label: "3. Perencanaan" },
    { value: "4", label: "4. Sistem" },
    { value: "5", label: "5. Inspeksi dan Pengawasan" },
    { value: "6", label: "6. Intelejen dan Pengamanan" },
    { value: "7", label: "7. Operasi Militer" },
    { value: "8", label: "8. Personel SPRIN" },
    { value: "9", label: "9. Materiil dan Logistik" },
    { value: "10", label: "10. Komunikasi dan Elektronika" },
    { value: "11", label: "11. Teritorial" },
    { value: "12", label: "12. Pendidikan dan Latihan" },
    { value: "13", label: "13. Hukum" },
    { value: "14", label: "14. Penerangan" },
    { value: "15", label: "15. Kesehatan" },
    { value: "16", label: "16. Sejarah" },
    { value: "17", label: "17. Administrasi Umum" },
    { value: "18", label: "18. Keuangan" },
    { value: "19", label: "19. Pembinaan Mental" },
    { value: "20", label: "20. Pembinaan Jasmani" },
    { value: "21", label: "21. Hubungan Internasional" },
    { value: "22", label: "22. Navigasi dan Aeonautika" },
    { value: "23", label: "23. Industri" },
    { value: "24", label: "24. Psikologi" },
    { value: "25", label: "25. Laporan" },
    { value: "26", label: "26. Penelitian dan Pengembangan" },
    { value: "27", label: "27. Survei dan Pemetaan" },
    { value: "28", label: "28. Kumpulan SKEP, KEP KASAU" },
    { value: "29", label: "29. CD/DVD" },
    { value: "30", label: "30. kerjasama" },
    { value: "31", label: "31. Kode Untuk Berkas no 2" },
  ];

  const handleSelectCatalogChange = (selectedCatalogOption) => {
    setSelectedCatalogOption(selectedCatalogOption);
    setCatalogValue(selectedCatalogOption.value); // Gunakan selectedOption.value untuk mengatur catalogValue
  };

  const selectConditionOptions = [
    { value: '1', label: 'Baik' },
    { value: '2', label: 'Sedang' },
    { value: '3', label: 'Rusak' },
  ];
  const handleSelectConditionChange = (selectedConditionOption) => {
    setSelectedConditionOption(selectedConditionOption);
    // setCatalogValue(selectedCatalogOption.value); // Gunakan selectedOption.value untuk mengatur catalogValue
  };

  const selectTypeOptions = [
    { value:"1", label: 'Berkas' },
    { value:"2", label: 'Buku' },
    { value:"3", label : 'Audio'},
    { value:"4", label : 'Visual'},
    { value:"5", label : 'Film/Video'},
    { value:"6", label : 'Kartografi'},
    { value:"7", label: 'Elektronik'
    }
  ];
  const handleSelectTypeOptions = (selectedTypeOption) => {
    setSelectedTypeOption(selectedTypeOption);
  };

  const selectClassOptions = [
    { value:"1", label : 'Biasa'},
    { value:"2", label : 'Rahasia'},
    { value:"3", label : 'Sangat Rahasia'
    }
  ];
  const handleSelectClassOptions = (selectedClassOption) => {
    setSelectedClassOption(selectedClassOption);
  };

  const selectBuildingOptions =[
    { value:"1", label : 'Gedung 1'}
  ]
  const handleSelectBuildingOptions = (selectedBuildingOption) => {
    setSelectedBuildingOption(selectedBuildingOption);
  };

  const selectRoomOptions = [
    { value:"1", label :"Ruang 1"},
    { value:"2", label : "Ruang 2"}
  ]
  const handleSelectRoomOptions = (selectedRoomOption) => {
    setSelectedRoomOption(selectedRoomOption);
  };

  const selectRollopackOptions = [
    { value:"1", label :"R-1"},
    { value:"2", label :"R-2"},
    { value:"3", label :"R-3"},
    { value:"4", label :"R-4"},
    { value:"5", label :"R-5"},
    { value:"6", label :"R-6"},
    { value:"7", label :"R-7"},
    { value:"8", label :"R-8"},
    { value:"9", label :"R-9"},
    { value:"10", label :"R-10"},
    { value:"11", label :"R-11"},
    { value:"12", label :"R-12"},
    { value:"13", label :"R-13"},
    { value:"14", label :"R-14"},
    { value:"15", label :"R-15"},
    { value:"16", label :"R-16"},
    { value:"17", label :"R-17"},
    { value:"18", label :"R-18"},
    { value:"19", label :"R-19"},
    { value:"20", label :"R-20"}
  ]
  const handleSelectRollopackOptions = (selectedRollopackOption) => {
    setSelectedRollopackOption(selectedRollopackOption)
  };

  const selectCabinetOptions =[
    { value:"1", labek: "L1"},
    { value:"2", label: "L2"},
    { value:"3", label : "L3"},
    { value:"4", label :"L4"},
    { value:"4", label :"L5"}
  ]
  const handelSelectCabinetOptions = (selectedCabinetOption) => {
    setSelectedCabinetOption(selectedCabinetOption)
  };



  return (
    <div className="container-fluid">
      <div className="row bg-white m-3 rounded p-3 ">
        <h3>A. Identitas</h3>
        <form className="">
          <ul>
            <li className="mb-3 row">
              <label for="archive_code" class="col-sm-2 col-form-label">
                Kode Arsip
              </label>
              <div class="col-sm-9 m-2">
                <span id="archive_code"></span>
              </div>
            </li>
            <li className="mb-3 row">
              <label htmlFor="catalog" className="col-sm-2 col-form-label">
                Indeks Katalog
              </label>
              <div className="col-sm-9">
                <Select
                  id="catalog"
                  options={selectCatalogOptions}
                  value={selectedCatalogOption}
                  onChange={handleSelectCatalogChange}
                  placeholder="Pilih no indeks katalog"
                />
              </div>
            </li>
            <li className="mb-3 row">
              <label for="serial_number" class="col-sm-2 col-form-label">
                No Buku
              </label>
              <div class="col-sm-3 ">
                <input
                  type="number"
                  className="form-control"
                  id="serial_number"
                  placeholder="masukkan no buku"
                  onInput={(e) => setSerialNumberValue(e.target.value)}
                />
              </div>
              <label for="file_number" class="col-sm-2 col-form-label ">
                No Berkas
              </label>
              <div class="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="file_number "
                  placeholder="masukkan no berkas"
                />
              </div>
            </li>
            <li className="mb-3 row">
              <label for="tittle" class="col-sm-2 col-form-label">
                Judul
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="tittle"
                  placeholder="masukkan judul"
                />
              </div>
            </li>
            <li className="mb-3 row">
              <label for="Release_date" class="col-sm-2 col-form-label">
                Tanggal Terbit
              </label>
              <div class="col-sm-3">
                <input
                  type="date"
                  className="form-control"
                  id="Release_date"
                  placeholder="masukkan judul"
                />
              </div>
            </li>
            <li className="mb-3 row">
              <label for="condition_id" class="col-sm-2 col-form-label">
                Kondisi Arsip
              </label>
              <div class="col-sm-9">
                
                <Select
                  id="condition_id"
                  options={selectConditionOptions}
                  value={selectedConditionOption}
                  onChange={handleSelectConditionChange}
                  placeholder="Pilih Kondisi Arsip"
                />
              </div>
              
            </li>
            <li className="mb-3 row">
              <label for="type" class="col-sm-2 col-form-label">
                Jenis Arsip
              </label>
              <div class="col-sm-9">
                <Select
                  id="type"
                  options={selectTypeOptions}
                  Value={selectedTypeOption}
                  onChange={handleSelectTypeOptions}
                  placeholder="Pilih Jenis Arsip"
                />
                  </div>
            </li>
            <li className="mb-3 row">
              <label for="class" class="col-sm-2 col-form-label">
                Kelas Arsip
              </label>
              <div class="col-sm-9">
                <Select
                  id="class"
                  options={selectClassOptions}
                  Value={selectedClassOption}
                  onChange={handleSelectClassOptions}
                  placeholder="Pilih kelas arsip"
                />
              </div>
            </li>
            <li className="mb-3 row">
              <label for="agency" class="col-sm-2 col-form-label">
                Asal Instansi
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="agency"
                  placeholder="Masukkan Instansi"
                />
              </div>
            </li>
          </ul>
        </form>
      </div>
      <div className="row bg-white m-3 rounded p-3 ">
        <h3>B. Lokasi</h3>
        <form>
          <ul>
            <li className="mb-3 row">
              <label for="building" class="col-sm-2 col-form-label">
                Gedung
              </label>
              <div class="col-sm-3">
                <Select
                  id="Building"
                  options={selectBuildingOptions}
                  Value={selectedBuildingOption}
                  onChange={handleSelectBuildingOptions}
                  placeholder="Pilih Gedung"
                />
              </div>
              <label for="room" class="col-sm-2 col-form-label ">
                Ruang
              </label>
              <div class="col-sm-3">
                <Select
                  id="room"
                  options={selectRoomOptions}
                  Value={selectedRoomOption}
                  onChange={handleSelectRoomOptions}
                  placeholder="Pilih Ruang"
                />
              </div>
            </li>
            <li className="mb-3 row">
              <label for="rollopack" class="col-sm-2 col-form-label">
                Roll O Pack
              </label>
              <div class="col-sm-9">
                <Select
                  id="rollopack"
                  options={selectRollopackOptions}
                  Value={selectedRollopackOption}
                  onChange={handleSelectRollopackOptions}
                  placeholder="Pilih roll o pack"
                />
                  </div>
            </li>
            <li className="mb-3 row">
              <label for="cabinet" class="col-sm-2 col-form-label">
                Lemari
              </label>
              <div class="col-sm-9">
                <Select
                  id="cabinet"
                  options={selectCabinetOptions}
                  Value={selectedCabinetOption}
                  onChange={handleSelectRollopackOptions}
                  placeholder="Pilih Lemari"
                  />
              </div>
            </li>
            <li className="mb-3 row">
              <label for="rack" class="col-sm-2 col-form-label">
                Rak
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="rack"
                  placeholder="Masukkan Rak"
                />
              </div>
            </li>
            <li className="mb-3 row">
              <label for="box" class="col-sm-2 col-form-label">
                Box
              </label>
              <div class="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="box"
                  placeholder="Masukkan Box"
                />
              </div>
            </li>
          </ul>
        </form>
        <div>
          <form>
            <ul>
              <li className="mb-3 row">
                <label for="scan" class="col-sm-2 col-form-label">
                  File Scan
                </label>
                <div class="col-sm-9">
                  <input
                    onChange={handleChangePdf}
                    type="file"
                    className="form-control"
                    id="scan"
                    placeholder="Pilih File"
                    accept=".pdf"
                  />
                </div>
              </li>
              <li className="mb-3 row justify-content-center align-items-center">
                <div className="pdf-view d-none col-sm-9 " id="pdf-viewer">
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                    {viewPdf && (
                      <>
                        <div className="view">
                          <Viewer fileUrl={viewPdf} plugins={[newplugin]} />
                        </div>
                      </>
                    )}
                    {!viewPdf && <></>}
                  </Worker>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>

      <div className="row d-flex flex-column justify-content-between align-items-end">
        <input
          class="col-md-1 col-3 me-5 mt-2 mb-2 btn btn-primary"
          type="submit"
          value="Submit"
          onClick={handleModalOpen}
        />
      </div>
      {showModal && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between align-items-center">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <img src={Icon} className="logopop" alt="Icon" />
                  </div>
                  <div className="col">
                    <h4 className="modal-title">Sim Arsip</h4>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleModalClose}
                ></button>
              </div>
              <div className="modal-body text-center">
                {/* Add your modal content here */}
                <FiCheckCircle className="fs-1 text-success " />
                <h5 className="p-2 m-2">Arsip Berhasil Ditambahkan</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

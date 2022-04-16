import { useRouter } from "next/router";
import { useState } from "react";
import NetworkInput from "../../components/NetworkInput";
import SectionBox from "../../components/SectionBox";

export default function Site() {
  const router = useRouter();
  const { site } = router.query;

  const cj_initialState = {
    token: "",
    requestor_id: "",
    website_id: "",
  };

  const rakuten_initialState = {
    client_id: "",
    client_secret: "",
  };
  const [cjInfo, setCjInfo] = useState(cj_initialState);
  const [rakutenInfo, setRakutenInfo] = useState(rakuten_initialState);

  return (
    <SectionBox>
      {site === "cj" && (
        <NetworkInput
          info={cjInfo}
          setInfo={setCjInfo}
          networkName="CJ"
          storageName="cj"
          initialState={cj_initialState}
        />
      )}
      {site === "rakuten" && (
        <NetworkInput
          info={rakutenInfo}
          setInfo={setRakutenInfo}
          networkName="RAKUTEN"
          storageName="rakuten"
          initialState={rakuten_initialState}
        />
      )}
    </SectionBox>
  );
}

import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ModernSidebarTemplate = ({ data, accentColor }) => {

const formatDate = (dateStr) => {
if (!dateStr) return "";
const [year, month] = dateStr.split("-");
return new Date(year, month - 1).toLocaleDateString("en-US", {
year: "numeric",
month: "short",
});
};

return ( <div className="max-w-5xl mx-auto bg-white shadow-lg flex text-gray-800">

  {/* Sidebar */}
  <aside
    className="w-1/3 p-6 text-white"
    style={{ backgroundColor: accentColor }}
  >
    <h1 className="text-2xl font-bold mb-2">
      {data.personal_info?.full_name || "Your Name"}
    </h1>

    <p className="text-sm opacity-90 mb-6">
      {data.personal_info?.title || "Professional Title"}
    </p>

    {/* Contact */}
    <div className="mb-6">
      <h2 className="font-semibold mb-2 uppercase text-sm">
        Contact
      </h2>

      <div className="space-y-2 text-sm">
        {data.personal_info?.email && (
          <div className="flex gap-2 items-center">
            <Mail size={14} />
            {data.personal_info.email}
          </div>
        )}

        {data.personal_info?.phone && (
          <div className="flex gap-2 items-center">
            <Phone size={14} />
            {data.personal_info.phone}
          </div>
        )}

        {data.personal_info?.location && (
          <div className="flex gap-2 items-center">
            <MapPin size={14} />
            {data.personal_info.location}
          </div>
        )}

        {data.personal_info?.linkedin && (
          <div className="flex gap-2 items-center break-all">
            <Linkedin size={14} />
            {data.personal_info.linkedin}
          </div>
        )}

        {data.personal_info?.website && (
          <div className="flex gap-2 items-center break-all">
            <Globe size={14} />
            {data.personal_info.website}
          </div>
        )}
      </div>
    </div>

    {/* Skills */}
    {data.skills && data.skills.length > 0 && (
      <div className="mb-6">
        <h2 className="font-semibold mb-3 uppercase text-sm">
          Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white text-gray-800 text-xs px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}

    {/* Education */}
    {data.education && data.education.length > 0 && (
      <div>
        <h2 className="font-semibold mb-3 uppercase text-sm">
          Education
        </h2>

        <div className="space-y-3 text-sm">
          {data.education.map((edu, index) => (
            <div key={index}>
              <p className="font-medium">
                {edu.degree}
              </p>
              <p>{edu.institution}</p>
              <p className="opacity-80">
                {formatDate(edu.graduation_date)}
              </p>
            </div>
          ))}
        </div>
      </div>
    )}
  </aside>

  {/* Main Content */}
  <main className="w-2/3 p-8">

    {/* Summary */}
    {data.professional_summary && (
      <section className="mb-6">
        <h2
          className="text-lg font-semibold mb-2 uppercase"
          style={{ color: accentColor }}
        >
          Summary
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {data.professional_summary}
        </p>
      </section>
    )}

    {/* Experience */}
    {data.experience && data.experience.length > 0 && (
      <section className="mb-6">
        <h2
          className="text-lg font-semibold mb-4 uppercase"
          style={{ color: accentColor }}
        >
          Experience
        </h2>

        <div className="space-y-4">
          {data.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">
                    {exp.position}
                  </h3>
                  <p className="text-gray-600">
                    {exp.company}
                  </p>
                </div>

                <p className="text-sm text-gray-500">
                  {formatDate(exp.start_date)} -{" "}
                  {exp.is_current
                    ? "Present"
                    : formatDate(exp.end_date)}
                </p>
              </div>

              {exp.description && (
                <p className="text-gray-700 text-sm mt-2 whitespace-pre-line">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    )}

    {/* Projects */}
    {data.project && data.project.length > 0 && (
      <section>
        <h2
          className="text-lg font-semibold mb-4 uppercase"
          style={{ color: accentColor }}
        >
          Projects
        </h2>

        <div className="space-y-3">
          {data.project.map((proj, index) => (
            <div key={index}>
              <h3 className="font-semibold">
                {proj.name}
              </h3>

              <p className="text-gray-700 text-sm">
                {proj.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    )}

  </main>
</div>


);
};

export default ModernSidebarTemplate;

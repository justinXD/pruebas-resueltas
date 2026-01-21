if OBJECT_ID('tempdb..#tempskills') is not null drop table #tempskills
if OBJECT_ID('tempdb..#tempcertifications') is not null drop table #tempcertifications

select
	'Skill' as qualification_type,
	S.[Name] as qualification_name,
	row_number() over(partition by S.IDUsuario, S.[Name] order by S.IDUsuario) as rn
into #tempskills
from Usuario.tblSkills S

select
	c.IDUsuario,
	'Certification' as qualification_type,
	c.[Name] as qualification_name,
	ROW_NUMBER() over (partition by c.IDUsuario, c.[Name] order by c.IDUsuario) as rn
into #tempcertifications
from Usuario.tblCertifications c


select 
	'Certification' as qualification_type,
	c.qualification_name,
	count(c.qualification_name) as total_unique_employees
from (
	select * from #tempcertifications where rn =1
) c
group by c.qualification_name
union all
select 
	'Skill' as qualification_type,
	s.qualification_name,
	count(s.qualification_name) as total_unique_employees
from (
	select * from #tempskills where rn =1
) s
group by s.qualification_name


-- version optimizada

SELECT
    'Certification' AS qualification_type,
    c.[Name] AS qualification_name,
    COUNT(DISTINCT c.IDUsuario) AS total_unique_employees
FROM Usuario.tblCertifications c
GROUP BY c.[Name]

UNION ALL

SELECT
    'Skill' AS qualification_type,
    s.[Name] AS qualification_name,
    COUNT(DISTINCT s.IDUsuario) AS total_unique_employees
FROM Usuario.tblSkills s
GROUP BY s.[Name];
